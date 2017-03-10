import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); 
    

    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}

// the only way nested components can send information to containers is through events. A property must be decorated using @output.
// the property must be of type EventEmitter<>. The generic parameter is used to specify the type of the payload the nested component
// is transmitting. First, you need to develop an event handler in the within the nested component to handle the event that will trigger 
// the whole process. 
// In the container, you need to listen to the event triggered by the nested component. Use $event to access the payload of the event.