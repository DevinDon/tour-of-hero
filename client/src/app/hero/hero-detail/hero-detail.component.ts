import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from 'src/app/app.service';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.type';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  protected formGroup: FormGroup;

  constructor(
    protected app: AppService,
    @Inject(MAT_DIALOG_DATA) protected hero: Hero,
    private dialog: MatDialogRef<HeroDetailComponent>,
    private service: HeroService
  ) {
    this.formGroup = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.formGroup.get('id').setValue(this.hero.id);
    this.formGroup.get('name').setValue(this.hero.name);
    this.formGroup.get('id').disable();
  }

  update() {
    this.hero.name = this.formGroup.get('name').value;
    this.service
      .update(this.formGroup.get('id').value, this.hero)
      .subscribe(v => {
        if (v.status) {
          this.app.openBar(`Hero ${this.hero.id}: ${this.hero.name} saved successfully.`);
        } else {
          this.app.openBar(`Hero ${this.hero.id}: ${this.hero.name} saved failed.`);
        }
        this.dialog.close();
      });
  }

}
