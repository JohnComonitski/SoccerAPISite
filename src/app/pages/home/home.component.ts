import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/components/header/header.component";
import {IntroOneComponent} from "../../shared/components/intro-one/intro-one.component";
import {FeaturesComponent} from "../../shared/components/features/features.component";
import {TabsSectionComponent} from "../../shared/components/tabs-section/tabs-section.component";
import {PortfolioComponent} from "../../shared/components/portfolio/portfolio.component";
import {ServicesComponent} from "../../shared/components/services/services.component";
import {TestimonialsCarouselComponent} from "../../shared/components/testimonials-carousel/testimonials-carousel.component";
import {PricingComponent} from "../../shared/components/pricing/pricing.component";
import {ContactComponent} from "../../shared/components/contact/contact.component";
import {CTAComponent} from "../../shared/components/cta/cta.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import { ServicesTwoComponent } from '../../shared/components/services-two/services-two.component';

@Component({
    selector: 'app-home',
    imports: [RouterModule, HeaderComponent,IntroOneComponent,FeaturesComponent,TabsSectionComponent,PortfolioComponent,ServicesComponent,TestimonialsCarouselComponent,PricingComponent,ContactComponent,CTAComponent,FooterComponent,ServicesTwoComponent],
    templateUrl: './home.component.html',
})
export class HomeComponent {}