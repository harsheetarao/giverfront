import * as React$1 from 'react';
import React__default from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

interface Message$1 {
    id: string;
    content: string;
    timestamp: Date;
    isRead: boolean;
    sender: "user" | "admin";
}

interface PickupItem$1 {
    id: string;
    imageUrl: string;
    title?: string;
    description: string;
    availableDates: Array<{
        date: string;
        requestCount: number;
    }>;
    location: string;
}
interface AcceptedPickupItem extends PickupItem$1 {
    status: 'pending' | 'verified' | 'incorrect' | 'picked_up' | 'completed' | 'in_progress' | 'cancelled' | 'scheduled';
    verificationPhotos: Array<{
        id: string;
        imageUrl: string;
        timestamp: Date;
        note?: string;
    }>;
    scheduledDate?: string;
    name: string;
    photos?: string[];
}
interface ItemDetails$1 {
    productId?: string;
    description?: string;
    processingPhotos?: string[];
}

interface BasePickupRequest {
    id: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    messages: Message$1[];
    address: string;
}
interface PickupRequest extends BasePickupRequest {
    items: PickupItem$1[];
    status: 'pending' | 'approved' | 'rejected' | 'completed' | 'in_progress' | 'cancelled' | 'scheduled' | 'in_inventory' | 'ready_for_sale';
    pickupPhoto: string;
    pickupDate: Date;
    pickupAddress: string;
}
interface AcceptedRequest$1 extends BasePickupRequest {
    items: AcceptedPickupItem[];
    status: 'pending' | 'verified' | 'incorrect' | 'picked_up';
    pickupDate?: string;
    email?: string;
    phone?: string;
}
type RequestStatus = 'completed' | 'in_inventory' | 'ready_for_sale';

interface AcceptedRequestManagerProps {
    requests: AcceptedRequest$1[];
    onUpdateItemStatus: (requestId: string, itemId: string, status: AcceptedPickupItem['status']) => void;
    onAddPhoto: (requestId: string, itemId: string, photo: File, note?: string) => void;
    onReschedule: (requestId: string, newDate: string) => void;
    onCompletePickup: (requestId: string) => void;
    onSendMessage: (requestId: string, message: string) => void;
    onMessageRead?: (requestId: string, messageId: string) => void;
    availableDates: string[];
    className?: string;
}
declare const AcceptedRequestManager: ({ requests, onUpdateItemStatus, onAddPhoto, onReschedule, onCompletePickup, onSendMessage, onMessageRead, availableDates, className }: AcceptedRequestManagerProps) => React__default.JSX.Element;

declare const buttonVariants$1: (props?: ({
    variant?: "default" | "secondary" | "link" | "outline" | "destructive" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants$1> {
    asChild?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

interface CardProps {
    imageUrl: string;
    alt: string;
    children: React__default.ReactNode;
}
declare const Card: ({ imageUrl, alt, children }: CardProps) => React__default.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "primary" | "cta" | "secondary" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface CustomButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children?: React__default.ReactNode;
    icon?: React__default.ReactNode;
    label?: string;
}
declare const CustomButton: ({ children, icon, label, variant, size, className, ...props }: CustomButtonProps) => React__default.JSX.Element;

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
interface FormInputProps {
    label: string;
    hint?: string;
    state?: InputState;
    className?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    onKeyDown?: (e: React__default.KeyboardEvent<HTMLInputElement>) => void;
}
declare const FormInput: React__default.ForwardRefExoticComponent<FormInputProps & React__default.RefAttributes<HTMLInputElement>>;

interface ImageUploadProps {
    onUpload: (photos: string[]) => void;
    maxFiles?: number;
    className?: string;
}
declare const ImageUpload: ({ onUpload, maxFiles, className }: ImageUploadProps) => React__default.JSX.Element;

interface ProcessingItem$3 {
    id: string;
    productId: string;
    pickupPhoto: string;
    pickupDescription: string;
    receivedDate: Date;
    status: 'in_inventory' | 'ready_for_sale';
    customerName: string;
}
interface ItemDetails {
    title: string;
    description: string;
    condition: string;
    dimensions: {
        length: number;
        width: number;
        height: number;
    };
    materials: string[];
    attributes: string[];
    estimatedValue: number;
    category: string;
    tags: string[];
    features: string;
    defects: string;
    storageLocation: string;
    processingPhotos: string[];
}
interface InventoryItemProcessingProps {
    items: ProcessingItem$3[];
    onUpdateDetails: (itemId: string, details: ItemDetails) => void;
    onUpdateStatus: (itemId: string, status: 'ready_for_sale') => void;
    onSaveDraft: (itemId: string, details: Partial<ItemDetails>) => void;
    className?: string;
}
declare const InventoryItemProcessing: ({ items, onUpdateDetails, onUpdateStatus, onSaveDraft, className }: InventoryItemProcessingProps) => React__default.JSX.Element;

interface InventoryProcessingProps {
    request: PickupRequest;
    onUpdateStatus: (status: RequestStatus) => void;
    onUpdateDetails: (details: ItemDetails$1) => void;
    onAddProcessingPhotos: (photos: string[]) => void;
    onConfirmReceipt: () => void;
}
declare const InventoryProcessing: ({ request, onUpdateStatus, onUpdateDetails, onAddProcessingPhotos, onConfirmReceipt, }: InventoryProcessingProps) => React$1.JSX.Element;

interface ProcessingItem$2 {
    id: string;
    productId: string;
    pickupPhoto: string;
    pickupDescription: string;
    receivedDate: Date;
    customerName: string;
    status?: 'in_inventory' | 'ready_for_sale';
}
interface InventoryProcessingManagerProps {
    items: ProcessingItem$2[];
    onUpdateDetails: (itemId: string, details: any) => void;
    onUpdateStatus: (itemId: string, status: 'ready_for_sale') => void;
    onSaveDraft: (itemId: string, details: any) => void;
    className?: string;
}
declare const InventoryProcessingManager: ({ items, onUpdateDetails, onUpdateStatus, onSaveDraft, className }: InventoryProcessingManagerProps) => React__default.JSX.Element;

interface MapModalProps {
    address: string;
    onClose: () => void;
}
declare const MapModal: ({ address, onClose }: MapModalProps) => React__default.JSX.Element;

interface MessageBubbleProps {
    children: React__default.ReactNode;
    state?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
}
declare const MessageBubble: ({ children, state, className }: MessageBubbleProps) => React__default.JSX.Element;

interface Message {
    id: string;
    content: string;
    timestamp: Date;
    isRead: boolean;
    sender: 'user' | 'admin';
}
interface MessageThreadProps {
    messages: Message[];
    onSendMessage: (message: string) => void;
    onMessageRead?: (messageId: string) => void;
    className?: string;
}
declare const MessageThread: ({ messages, onSendMessage, onMessageRead, className }: MessageThreadProps) => React__default.JSX.Element;

interface ModalProps {
    children: React__default.ReactNode;
    onClose: () => void;
    className?: string;
}
declare const Modal: ({ children, onClose, className }: ModalProps) => React__default.JSX.Element;

interface PickupItem {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    status: 'pending' | 'completed' | 'in_inventory';
}
interface PickupItemQueueProps {
    items: PickupItem[];
    onReceiveItem: (id: string) => void;
    onRejectItem: (itemId: string) => void;
    onUpdateStatus: (itemId: string, status: RequestStatus) => void;
    onUpdateDetails: (itemId: string, details: ItemDetails$1) => void;
    onAddProcessingPhotos: (itemId: string, photos: string[]) => void;
    className?: string;
}
declare const PickupItemQueue: ({ items, onReceiveItem, onRejectItem, onUpdateStatus, onUpdateDetails, onAddProcessingPhotos, className }: PickupItemQueueProps) => React__default.JSX.Element;

interface PickupRequestFormProps {
    onSubmit: (data: any) => void;
    className?: string;
}
declare const PickupRequestForm: ({ onSubmit, className, }: PickupRequestFormProps) => React__default.JSX.Element;

interface PickupRequestManagerProps {
    requests: PickupRequest[];
    onAcceptItem: (requestId: string, itemId: string) => void;
    onRejectItem: (requestId: string, itemId: string) => void;
    onSendMessage: (requestId: string, message: string) => void;
    onMessageRead?: (requestId: string, messageId: string) => void;
    className?: string;
}
declare const PickupRequestManager: ({ requests, onAcceptItem, onRejectItem, onSendMessage, onMessageRead, className }: PickupRequestManagerProps) => React__default.JSX.Element;

interface ProcessingItem$1 {
    id: string;
    productId: string;
    pickupPhoto: string;
    pickupDescription: string;
    receivedDate: Date;
    customerName: string;
}
interface ProcessingQueueProps {
    items: ProcessingItem$1[];
    onSelectItem: (itemId: string) => void;
    className?: string;
}
declare const ProcessingQueue: ({ items, onSelectItem, className, }: ProcessingQueueProps) => React__default.JSX.Element;

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

interface AcceptedRequest {
    id: string;
    items: AcceptedPickupItem[];
    messages: Message$1[];
    status: 'pending' | 'verified' | 'incorrect' | 'picked_up';
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    address: string;
}

interface ProcessingItem {
    id: string;
}

export { type AcceptedRequest, AcceptedRequestManager, Button, Card, type CardProps, CustomButton, type CustomButtonProps, Footer, FormDropdown, FormInput, Header, ImageUpload, InventoryItemProcessing, InventoryProcessing, InventoryProcessingManager, type ItemDetails$1 as ItemDetails, MapModal, type MenuItem, type Message$1 as Message, MessageBubble, MessageThread, Modal, Page, PickupItemQueue, PickupRequestForm, PickupRequestManager, type ProcessingItem, ProcessingQueue, ProductCard, Progress, ShoppingCart, SwipeCardDeck, Tag, Toggle };
