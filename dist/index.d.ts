import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React$1 from 'react';
import React__default from 'react';
import { VariantProps } from 'class-variance-authority';

declare const buttonVariants$1: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants$1> {
    asChild?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

interface CardProps {
    imageUrl?: string;
    alt?: string;
    children: React__default.ReactNode;
    className?: string;
    onClick?: () => void;
}
declare const Card: ({ imageUrl, alt, children, className, onClick }: CardProps) => React__default.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "secondary" | "primary" | "cta" | null | undefined;
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
declare const FormDropdown: React__default.ForwardRefExoticComponent<FormDropdownProps & React__default.RefAttributes<HTMLDivElement>>;

type InputState = 'normal' | 'completed' | 'error' | 'required' | 'blankRequired' | 'disabled';
interface FormInputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label: string;
    hint?: string;
    state?: InputState;
    className?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
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
interface ItemDetails$1 {
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
    price: number;
    costToAcquire: number;
}
interface ListingWorkflowProps {
    items: ProcessingItem$3[];
    onUpdateDetails: (itemId: string, details: ItemDetails$1) => void;
    onUpdateStatus: (itemId: string, status: 'ready_for_sale') => void;
    onSaveDraft: (itemId: string, details: Partial<ItemDetails$1>) => void;
    className?: string;
}
declare const ListingWorkflow: ({ items, onUpdateDetails, onUpdateStatus, onSaveDraft, className }: ListingWorkflowProps) => React__default.JSX.Element;

interface Message$2 {
    id: string;
    content: string;
    timestamp: Date;
    isRead: boolean;
    sender: "user" | "admin";
}

interface Message$1 {
    id: string;
    content: string;
    timestamp: Date;
    isRead: boolean;
    sender: 'user' | 'admin';
}
interface PickupItem {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    status: 'pending' | 'completed' | 'rejected' | 'verified' | 'incorrect';
    pickupPhoto: string;
    pickupDate: Date;
    pickupAddress: string;
    items: any[];
    messages: Message$1[];
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    address: string;
}
interface AcceptedPickupItem extends PickupItem {
    verificationPhotos: Array<{
        id: string;
        imageUrl: string;
        timestamp: Date;
        note?: string;
    }>;
    scheduledDate?: string;
    photos?: string[];
    availableDates: Array<{
        date: string;
        requestCount: number;
    }>;
}
interface ItemDetails {
    productId?: string;
    description?: string;
    processingPhotos?: string[];
}

interface BasePickupRequest {
    id: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    messages: Message$2[];
    address: string;
}
interface PickupRequest extends BasePickupRequest {
    items: PickupItem[];
    status: 'pending' | 'approved' | 'rejected' | 'completed' | 'in_progress' | 'cancelled' | 'scheduled' | 'in_inventory' | 'ready_for_sale';
    pickupPhoto: string;
    pickupDate: Date;
    pickupAddress: string;
}
type RequestStatus = 'pending' | 'completed' | 'rejected' | 'verified' | 'incorrect' | 'picked_up' | 'in_progress' | 'cancelled' | 'scheduled' | 'in_inventory' | 'ready_for_sale';

interface InventoryProcessingProps {
    request: PickupRequest;
    onUpdateStatus: (status: RequestStatus) => void;
    onUpdateDetails: (details: ItemDetails) => void;
    onAddProcessingPhotos: (photos: string[]) => void;
    onConfirmReceipt: () => void;
}
declare const InventoryProcessing: ({ request, onUpdateStatus, onUpdateDetails, onAddProcessingPhotos, onConfirmReceipt, }: InventoryProcessingProps) => React$1.JSX.Element;

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

interface ReceivingWorkflowProps {
    items: PickupItem[];
    onReceiveItem: (id: string) => void;
    onRejectItem: (itemId: string) => void;
    onUpdateStatus: (itemId: string, status: RequestStatus) => void;
    onUpdateDetails: (itemId: string, details: ItemDetails) => void;
    onAddProcessingPhotos: (itemId: string, photos: string[]) => void;
    className?: string;
}
declare const ReceivingWorkflow: ({ items, onReceiveItem, onRejectItem, onUpdateStatus, onUpdateDetails, onAddProcessingPhotos, className }: ReceivingWorkflowProps) => React__default.JSX.Element;

interface ProgressStep {
    label: string;
    description: string;
    icon: React__default.ComponentType<{
        className?: string;
    }>;
}
interface ProgressProps {
    steps: ProgressStep[];
    currentStep: number;
    onStepClick: (step: number) => void;
    completedSteps?: number[];
}
declare const Progress: ({ steps, currentStep, onStepClick, completedSteps }: ProgressProps) => React__default.JSX.Element;

interface UploadedItem {
    id: string;
    imageUrl: string;
    description?: string;
    quantity?: number;
    selectedFiles?: File[];
    status?: string;
}
interface PickupRequestFormProps {
    onSubmit: (data: any) => Promise<{
        id: string;
    }>;
    className?: string;
    skipContactStep?: boolean;
    renderDetailsStep?: (items: UploadedItem[], handleItemDescription: (id: string, description: string) => void, handleQuantityChange: (id: string, quantity: string) => void, availableDates: Array<{
        date: string;
        requestCount: number;
    }>) => React__default.ReactNode;
    availableDates?: Array<{
        date: string;
        requestCount: number;
    }>;
    skipConfirmationStep?: boolean;
    selectedDate?: string;
    selectedTime?: string;
    onDateSelect?: (date: string) => void;
    onTimeSelect?: (time: string) => void;
    steps?: ProgressStep[];
    renderCustomStep?: (currentStep: number) => React__default.ReactNode;
    validateStep?: (step: number) => boolean;
    isSubmitting?: boolean;
    onStepChange?: (step: number) => void;
    onCompletedStepsChange?: (steps: number[]) => void;
}
declare const PickupRequestForm: ({ onSubmit, className, skipContactStep, renderDetailsStep, availableDates, skipConfirmationStep, selectedDate, selectedTime, onDateSelect, onTimeSelect, steps, renderCustomStep, validateStep, isSubmitting, onStepChange, onCompletedStepsChange, }: PickupRequestFormProps) => React__default.JSX.Element;

interface PickupRequestManagerProps {
    pickupRequests: Array<{
        id: string;
        items: Array<{
            id: string;
            name: string;
            status: 'pending' | 'verified' | 'incorrect' | 'picked_up';
            imageUrl: string;
            description: string;
            availableDates: Array<{
                date: string;
                requestCount: number;
            }>;
            location: string;
            pickupPhoto: string;
            pickupDate: Date;
            pickupAddress: string;
            customerName: string;
            customerEmail: string;
            customerPhone: string;
            messages: Message$2[];
            address: string;
        }>;
        messages: any[];
        status: 'pending' | 'verified' | 'incorrect' | 'picked_up';
        customerName: string;
        customerEmail: string;
        customerPhone: string;
        address: string;
        pickupPhoto: string;
        pickupDate: Date;
        pickupAddress: string;
    }>;
    onAcceptRequest: (id: string) => void;
    onRejectRequest: (id: string) => void;
    onUpdateStatus: (id: string, status: string) => void;
    onSendMessage: (id: string, message: string) => void;
    onMessageRead?: (requestId: string, messageId: string) => void;
    className?: string;
}
declare const PickupRequestManager: ({ pickupRequests, onAcceptRequest, onRejectRequest, onUpdateStatus, onSendMessage, onMessageRead, className }: PickupRequestManagerProps) => React__default.JSX.Element;

interface ProductAttribute {
    label: string;
    value: string;
}
interface ProductCardProps {
    imageUrl: string;
    title: string;
    category: string;
    description: string;
    price: number;
    salePrice?: number;
    attributes?: ProductAttribute[];
    onAddToCart?: () => void;
    className?: string;
}
declare const ProductCard: ({ imageUrl, title, category, description, price, salePrice, attributes, onAddToCart, className, }: ProductCardProps) => React__default.JSX.Element;

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

interface SwipeCardProps {
    imageUrl: string;
    alt: string;
    children: React__default.ReactNode;
    onSwipe: (direction: 'left' | 'right') => void;
    isVisible?: boolean;
}
declare const SwipeCard: ({ imageUrl, alt, children, onSwipe, isVisible }: SwipeCardProps) => React__default.JSX.Element | null;

interface PrivacyProps {
    isVisible: boolean;
    onClose: () => void;
    className?: string;
}
declare function Privacy({ isVisible, onClose, className }: PrivacyProps): React$1.JSX.Element | null;

interface TermsOfServiceProps {
    isVisible: boolean;
    onClose: () => void;
    className?: string;
}
declare function TermsOfService({ isVisible, onClose, className }: TermsOfServiceProps): React$1.JSX.Element | null;

declare const PartnerPickupRequestForm: (props: any) => React__default.JSX.Element;

declare const BulkPartnerPickupRequestForm: (props: any) => React__default.JSX.Element;

interface TimeSlotDetails {
    id: string;
    customerName: string;
    address: string;
    items: Array<{
        id: string;
        name: string;
        imageUrl: string;
        description: string;
    }>;
}
interface TimeSlot {
    time: string;
    availableDrivers: number;
    pickupCount: number;
    dropoffCount: number;
    pickups: TimeSlotDetails[];
    dropoffs: TimeSlotDetails[];
}
interface DayDetails {
    date: string;
    timeSlots: TimeSlot[];
    totalPickups: number;
    totalDropoffs: number;
    availableDrivers: number;
}
interface LogisticsCalendarProps {
    onDateSelect: (date: string) => void;
    onTimeSelect: (time: string) => void;
    selectedDate?: string;
    selectedTime?: string;
    className?: string;
    calendarData?: DayDetails[];
}
declare const LogisticsCalendar: ({ onDateSelect, onTimeSelect, selectedDate, selectedTime, className, calendarData }: LogisticsCalendarProps) => React__default.JSX.Element;

interface PickupListProps {
    pickups: PickupRequest[];
    onSelectPickup: (pickup: PickupRequest) => void;
}
declare const PickupList: ({ pickups, onSelectPickup }: PickupListProps) => React$1.JSX.Element;

interface ProcessingItem$2 {
    id: string;
    productId: string;
    pickupPhoto: string;
    pickupDescription: string;
    receivedDate: Date;
    customerName: string;
}
interface ProcessingQueueProps {
    items: ProcessingItem$2[];
    onSelectItem: (itemId: string) => void;
    className?: string;
}
declare const ProcessingQueue: ({ items, onSelectItem, className, }: ProcessingQueueProps) => React__default.JSX.Element;

interface AcceptedRequest {
    id: string;
    items: AcceptedPickupItem[];
    messages: Message$2[];
    status: 'pending' | 'verified' | 'incorrect' | 'picked_up' | 'completed' | 'in_progress' | 'cancelled' | 'scheduled';
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    pickupDate: Date;
    address: string;
    pickupPhoto: string;
    pickupAddress: string;
}

interface AcceptedRequestManagerProps {
    requests: AcceptedRequest[];
    onUpdateItemStatus: (requestId: string, itemId: string, status: AcceptedPickupItem['status']) => void;
    onAddPhoto: (requestId: string, itemId: string, photo: File, note?: string) => void;
    onReschedule: (requestId: string, newDate: string) => void;
    onCompletePickup: (requestId: string) => void;
    onSendMessage: (requestId: string, message: string) => void;
    onMessageRead?: (requestId: string, messageId: string) => void;
    availableDates: string[];
    className?: string;
}
declare const DriverPickupWorkflow: ({ requests, onUpdateItemStatus, onAddPhoto, onReschedule, onCompletePickup, onSendMessage, onMessageRead, availableDates, className }: AcceptedRequestManagerProps) => React__default.JSX.Element;

interface DropoffItem {
    id: string;
    name: string;
    description: string;
    quantity: number;
    condition: string;
    category: string;
    imageUrl: string;
    estimatedValue: number;
}
interface DropoffRequest {
    id: string;
    partnerName: string;
    partnerEmail: string;
    partnerPhone: string;
    scheduledDate: string;
    status: 'pending' | 'approved' | 'rejected' | 'completed';
    items: DropoffItem[];
    messages: Array<{
        id: string;
        content: string;
        timestamp: Date;
        isRead: boolean;
        sender: 'user' | 'admin';
    }>;
}
interface DropoffRequestManagerProps {
    dropoffRequests: DropoffRequest[];
    onApproveRequest: (id: string) => void;
    onRejectRequest: (id: string) => void;
    onUpdateStatus: (id: string, status: string) => void;
    onSendMessage: (id: string, message: string) => void;
    onUpdateQuantity: (requestId: string, itemId: string, quantity: number) => void;
    className?: string;
}
declare const DropoffRequestManager: ({ dropoffRequests, onApproveRequest, onRejectRequest, onUpdateStatus, onSendMessage, onUpdateQuantity, className }: DropoffRequestManagerProps) => React__default.JSX.Element;

interface ProcessingItem$1 {
    id: string;
    productId: string;
    pickupPhoto: string;
    pickupDescription: string;
    receivedDate: Date;
    customerName: string;
    status?: 'in_inventory' | 'ready_for_sale';
}
interface InventoryProcessingManagerProps {
    items: ProcessingItem$1[];
    onUpdateDetails: (itemId: string, details: any) => void;
    onUpdateStatus: (itemId: string, status: 'ready_for_sale') => void;
    onSaveDraft: (itemId: string, details: any) => void;
    className?: string;
}
declare const InventoryProcessingManager: ({ items, onUpdateDetails, onUpdateStatus, onSaveDraft, className }: InventoryProcessingManagerProps) => React__default.JSX.Element;

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    onSearch?: () => void;
    onFilter?: () => void;
    placeholder?: string;
    className?: string;
}
declare const SearchInput: React__default.ForwardRefExoticComponent<SearchInputProps & React__default.RefAttributes<HTMLInputElement>>;

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
        href: string;
    };
}
declare const Header: React__default.FC<HeaderProps>;

interface FooterProps {
    copyrightText: string;
    additionalContent?: React.ReactNode;
}
declare const Footer: ({ copyrightText, additionalContent }: FooterProps) => React$1.JSX.Element;

interface PageProps {
    children: React.ReactNode;
    className?: string;
}
declare const Page: ({ children, className }: PageProps) => React$1.JSX.Element;

interface ProcessingItem {
    id: string;
}

export { type AcceptedRequest, BulkPartnerPickupRequestForm, Button, Card, type CardProps, CustomButton, type CustomButtonProps, DriverPickupWorkflow, DropoffRequestManager, Footer, FormDropdown, FormInput, Header, ImageUpload, InventoryProcessing, InventoryProcessingManager, type ItemDetails, ListingWorkflow, LogisticsCalendar, MapModal, type MenuItem, type Message$2 as Message, MessageBubble, MessageThread, Modal, Page, PartnerPickupRequestForm, PickupList, PickupRequestForm, PickupRequestManager, Privacy, type ProcessingItem, ProcessingQueue, ProductCard, Progress, ReceivingWorkflow, SearchInput, ShoppingCart, SwipeCard, SwipeCardDeck, Tag, TermsOfService, Toggle };
