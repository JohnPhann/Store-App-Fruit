import Stripe from 'stripe'
import ProductCard from './ProductCard';



async function getStripeProducts(){
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2022-11-15',
  });

  const res = await stripe.prices.list({
    expand: ['data.product'],
  });

  const prices = res.data;

  return prices;
}


export default async function Home() {
  const products = await getStripeProducts()
  console.log(products)
  return (
    <main className="p-4 grid-cols-1 w-full sm:grid-cols-2 md:grid-col-3">
    <div className='max-w-[1000px] w-full mx-auto grid grid-clos-1
    sm:grid-cols-2 md:grid-cols-3'>
          {products.map((product , idx)=>{
                return (
                    <ProductCard key={idx} product={product}/>
                )
          })}
    </div>
    </main>
  )
}
