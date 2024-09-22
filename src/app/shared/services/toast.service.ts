import { Injectable } from '@angular/core';

interface Toast {
    message: string,
    header?: string,
    className?: string,
    delay?: number,
    createdAt: Date
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
    toasts: Toast[] = []

    show(message: string, options: Partial<Toast> = {}): void {
        this.toasts.unshift({message, createdAt: new Date ,...options})
    }

    showSuccess(message: string, options: Partial<Toast> = {}): void {
        this.show(message, {className: 'text-bg-success', ...options})
    }

    showError(message: string, options: Partial<Toast> = {}): void {
        this.show(message, {className: 'text-bg-danger', ...options})
    }

    remove(toast: Toast): void {
        this.toasts = this.toasts.filter(t => t !== toast)
    }
}
