
publicRouter.post('/send-verification-code', async (req, res) => {
    try {
        const { email } = req.body;
        
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Generate a 6-digit verification code
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Store the code in Firestore with expiration (15 minutes)
        const expiresAt = new Date();
        expiresAt.setMinutes(expiresAt.getMinutes() + 15);

        await admin.firestore().collection('emailVerifications').doc(email).set({
            code: verificationCode,
            expiresAt: admin.firestore.Timestamp.fromDate(expiresAt),
            verified: false
        });

        // Send verification email
        const msg = {
            to: email,
            from: process.env.SENDGRID_FROM_EMAIL,
            subject: 'Verify your email for Gone.com',
            text: `Your verification code is: ${verificationCode}\n\nThis code will expire in 15 minutes.\n\nIf you didn't request this code, please ignore this email.`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #4B7163;">Verify your email for Gone.com</h2>
                    <p>Your verification code is:</p>
                    <h1 style="color: #E67C45; font-size: 32px; letter-spacing: 5px;">${verificationCode}</h1>
                    <p>This code will expire in 15 minutes.</p>
                    <p style="color: #666; font-size: 12px;">If you didn't request this code, please ignore this email.</p>
                </div>
            `
        };

        await sgMail.send(msg);

        res.status(200).json({ 
            message: 'Verification code sent',
            email: email
        });

    } catch (error) {
        console.error('Error sending verification code:', error);
        res.status(500).json({ error: 'Failed to send verification code' });
    }
});

publicRouter.post('/verify-code', async (req, res) => {
    try {
        const { email, code } = req.body;

        if (!email || !code) {
            return res.status(400).json({ error: 'Email and code are required' });
        }

        const verificationDoc = await admin.firestore()
            .collection('emailVerifications')
            .doc(email)
            .get();

        if (!verificationDoc.exists) {
            return res.status(400).json({ 
                error: 'No verification code found',
                message: 'Please request a new verification code'
            });
        }

        const verification = verificationDoc.data();
        const now = new Date();
        const expiresAt = verification.expiresAt.toDate();

        if (now > expiresAt) {
            return res.status(400).json({ 
                error: 'Verification code expired',
                message: 'Please request a new verification code'
            });
        }

        if (verification.code !== code) {
            return res.status(400).json({ 
                error: 'Invalid code',
                message: 'The verification code is incorrect'
            });
        }

        // Mark email as verified
        await verificationDoc.ref.update({
            verified: true,
            verifiedAt: admin.firestore.Timestamp.now()
        });

        res.status(200).json({ 
            message: 'Email verified successfully',
            verified: true
        });

    } catch (error) {
        console.error('Error verifying code:', error);
        res.status(500).json({ error: 'Failed to verify code' });
    }
});
