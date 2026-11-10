import{BatteryCharging,CircleDot,Droplet,Fuel,LifeBuoy,Sparkles}from'lucide-react';
export const SERVICES=[
{id:'fuel',name:'Fuel',word:'fuel delivery',icon:Fuel,title:'Fuel, delivered while you work.',desc:'Petrol and diesel brought to your parked car by a trained driver. Contactless, scheduled or on demand.',hours:'24 hours, 7 days',cta:'Discover fuel delivery',bg:'bg-lime'},
{id:'battery',name:'Battery',word:'battery change',icon:BatteryCharging,title:'A dead battery? Fixed where you parked.',desc:'Our technicians test your battery, recommend the right replacement and fit it on the spot.',hours:'7am to 2am',cta:'Discover battery change',bg:'bg-sky-200'},
{id:'wash',name:'Car wash',word:'car wash',icon:Sparkles,title:'Your car deserves a spa day.',desc:'A waterless, eco-friendly wash and polish at your home or office while you carry on with your day.',hours:'6am to midnight',cta:'Discover car wash',bg:'bg-amber-200'},
{id:'tyres',name:'Tyres',word:'tyre change',icon:CircleDot,title:'Fresh tread, no garage queue.',desc:'Replacement, balancing and pressure checks at your doorstep, with tyres matched to your car.',hours:'9am to 11pm',cta:'Discover tyre change',bg:'bg-rose-200'},
{id:'oil',name:'Engine oil',word:'engine oil',icon:Droplet,title:'Oil change with a free 10-point check.',desc:'Mobile oil change, original filter replacement and a free multi-point inspection included.',hours:'9am to midnight',cta:'Discover engine oil',bg:'bg-orange-200'},
{id:'rescue',name:'Rescue',word:'roadside rescue',icon:LifeBuoy,title:'Stuck at the roadside? We are minutes away.',desc:'Out of fuel, flat tyre, flat battery or need a tow? One tap sends help to your pin.',hours:'7am to 2am',cta:'Request rescue',bg:'bg-red-200'}]as const;
export const AREAS=['Talatona','Maianga','Ingombota','Viana','Belas','Kilamba'];
export const FAQS:[string,string][]=[
['What are the operating hours?','Fuel delivery runs 24/7. Car wash 6am–midnight, battery service 7am–2am, oil change and tyres from 9am, and rescue from 7am to 2am. Customer care is available 8am to midnight.'],
['Where do you operate?','We are launching in Luanda: Talatona, Maianga, Ingombota, Viana, Belas and Kilamba. A service only appears if it is available at your pinned location.'],
['How do I pay?','Pay in the app with a local debit or credit card, or by mobile money. Cash is not accepted on delivery.'],
['Can I schedule a service?','Yes. Book now for the next available slot, or choose a time later today or tomorrow.'],
['How do I get the most from Roda?','Turn on notifications for live order updates and offers, and add your vehicles once so every booking takes seconds.']];
export const REVIEWS=[['Fuel arrived while I was in a meeting. I never queue at the station anymore.','Joana M.','Talatona'],['The technician explained the battery options and fitted it in 20 minutes.','Pedro A.','Maianga'],['Our whole sales fleet is now on Roda. Reporting alone saves us hours.','Nelson C.','Fleet manager'],['Flat tyre at night, help arrived fast. Genuinely a lifesaver.','Beatriz L.','Viana']];
