import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.type';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  formGroup: FormGroup;

  constructor(
    protected app: AppService,
    private location: Location,
    private route: ActivatedRoute,
    private service: HeroService
  ) {
    this.formGroup = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    });
    this.formGroup.get('id').disable();
  }

  ngOnInit() {
    this.load();
  }

  back() {
    this.location.back();
  }

  load() {
    this.service
      .getOne(+this.route.snapshot.paramMap.get('id'))
      .subscribe(hero => {
        this.hero = hero;
        this.formGroup.get('id').setValue(hero.id);
        this.formGroup.get('name').setValue(hero.name);
      });
  }

  save() {
    const hero: Hero = {
      id: this.formGroup.get('id').value,
      name: this.formGroup.get('name').value
    };
    this.service
      .saveOne(hero)
      .subscribe(v => {
        if (v.status) {
          this.app.openBar(`Hero ${hero.name} saved successfully.`);
        } else {
          this.app.openBar(`Hero ${hero.name} saved failed.`);
        }
      });
  }

}
