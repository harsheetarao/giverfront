import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React$1 from 'react';
import React__default from 'react';
import { VariantProps } from 'class-variance-authority';
import * as SheetPrimitive from '@radix-ui/react-dialog';

declare const buttonVariants$1: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants$1> {
    asChild?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const Sheet: React$1.FC<SheetPrimitive.DialogProps>;
declare const SheetTrigger: React$1.ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const sheetVariants: (props?: ({
    side?: "top" | "bottom" | "left" | "right" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface SheetContentProps extends React$1.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: React$1.ForwardRefExoticComponent<SheetContentProps & React$1.RefAttributes<HTMLDivElement>>;

interface CardProps {
    imageUrl: string;
    alt: string;
    children: React__default.ReactNode;
}
declare const Card: ({ imageUrl, alt, children }: CardProps) => React__default.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "secondary" | "primary" | "cta" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface CustomButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: React__default.ReactNode;
}
declare const CustomButton: ({ children, variant, size, className, ...props }: CustomButtonProps) => React__default.JSX.Element;

type DropdownState = 'normal' | 'completed' | 'error' | 'required' | 'blankRequired' | 'disabled';
interface FormDropdownProps extends Omit<React__default.SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
    label: string;
    hint?: string;
    state?: DropdownState;
    options: Array<{
        value: string;
        label: string;
    }>;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}
declare const FormDropdown: React__default.ForwardRefExoticComponent<FormDropdownProps & React__default.RefAttributes<HTMLSelectElement>>;

type InputState = 'normal' | 'completed' | 'error' | 'required' | 'blankRequired' | 'disabled';
interface FormInputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label: string;
    hint?: string;
    state?: InputState;
    className?: string;
    value: string;
    onChange: (value: string) => void;
}
declare const FormInput: React__default.ForwardRefExoticComponent<FormInputProps & React__default.RefAttributes<HTMLInputElement>>;

interface MessageBubbleProps {
    children: React__default.ReactNode;
    state?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
}
declare const MessageBubble: ({ children, state, className }: MessageBubbleProps) => React__default.JSX.Element;

interface PickupRequestFormProps {
    onSubmit: (data: any) => void;
    className?: string;
}
declare const PickupRequestForm: ({ onSubmit, className, }: PickupRequestFormProps) => React__default.JSX.Element;

interface PickupItem {
    id: string;
    imageUrl: string;
    title?: string;
    description: string;
    availableDates: string[];
    location: string;
}
interface PickupRequestManagerProps {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    items: PickupItem[];
    onAcceptItem: (itemId: string) => void;
    onRejectItem: (itemId: string) => void;
    onSendMessage: (message: string) => void;
}
declare const PickupRequestManager: ({ customerName, customerEmail, customerPhone, items: initialItems, onAcceptItem, onRejectItem, onSendMessage, }: PickupRequestManagerProps) => React__default.JSX.Element;

interface ProductCardProps {
    imageUrl: string;
    title: string;
    category: string;
    description: string;
    price: number;
    attributes: string[];
    onAddToCart?: () => void;
    className?: string;
}
declare const ProductCard: ({ imageUrl, title, category, description, price, attributes, onAddToCart, className, }: ProductCardProps) => React__default.JSX.Element;

interface ProgressProps {
    steps: string[];
    currentStep: number;
}
declare const Progress: ({ steps, currentStep }: ProgressProps) => React__default.JSX.Element;

interface CartItem {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}
interface ShoppingCartProps {
    items: CartItem[];
    onRemoveItem: (itemId: string) => void;
    onCheckout: () => void;
    className?: string;
}
declare const ShoppingCart: ({ items: initialItems, onRemoveItem, onCheckout, className, }: ShoppingCartProps) => React__default.JSX.Element;

interface CardData {
    id: string | number;
    imageUrl: string;
    alt: string;
    content: React__default.ReactNode;
}
interface SwipeCardDeckProps {
    cards: CardData[];
    onSwipeLeft?: (card: CardData) => void;
    onSwipeRight?: (card: CardData) => void;
    onEmpty?: () => void;
}
declare const SwipeCardDeck: ({ cards, onSwipeLeft, onSwipeRight, onEmpty }: SwipeCardDeckProps) => React__default.JSX.Element;

type TagVariant = 'primary' | 'cta' | 'secondary';
interface TagProps {
    text: string;
    variant?: TagVariant;
    onDelete?: () => void;
    className?: string;
}
declare const Tag: ({ text, variant, onDelete, className }: TagProps) => React__default.JSX.Element;

type ToggleVariant = 'primary' | 'cta' | 'secondary';
interface ToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    variant?: ToggleVariant;
    disabled?: boolean;
    className?: string;
}
declare const Toggle: ({ checked, onChange, variant, disabled, className }: ToggleProps) => React$1.JSX.Element;

type MenuItem = {
    label: string;
    href: string;
};
interface HeaderProps {
    menuItems: MenuItem[];
    logo?: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    };
}
declare const Header: React__default.FC<HeaderProps>;

declare const Footer: () => React$1.JSX.Element;

interface PageProps {
    children: React.ReactNode;
}
declare const Page: React.FC<PageProps>;

export { Button, Card, type CardProps, CustomButton, type CustomButtonProps, Footer, FormDropdown, FormInput, Header, type MenuItem, MessageBubble, Page, PickupRequestForm, PickupRequestManager, ProductCard, Progress, Sheet, SheetContent, SheetTrigger, ShoppingCart, SwipeCardDeck, Tag, Toggle };
