import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor() { }

  ngOnInit(): void {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarWrapper = document.getElementById('sidebar-wrapper');

    sidebarToggle?.addEventListener('click', () => {
      sidebarWrapper?.classList.toggle('active');
    });
  }
 
  showFirstDiv = true;
  showSecondDiv = false;


  toggleDivs() {
    this.showFirstDiv = !this.showFirstDiv;
    this.showSecondDiv = !this.showSecondDiv;
  }
 // حالة لتمثيل التغيير في CSS
 isChanged = false;

 // دالة لتبديل حالة CSS
 toggleStyle() {
   this.isChanged = !this.isChanged;
 }


}
