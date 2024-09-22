import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'timeAgo',
    pure: false
})
export class TimeAgoPipe implements PipeTransform {
    transform(value: Date): string {
        const now = new Date()
        const seconds = Math.floor((now.getTime() - new Date(value).getTime()) / 1000)

        if (seconds === 0) return 'A l\'instant'
        return `Il y a ${seconds} sec${seconds > 1 ? 's' : ''}`
    }
}
