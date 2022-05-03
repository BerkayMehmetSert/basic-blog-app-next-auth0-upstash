export default function Home() {
  return (
    <>
      <div className='max-w-2xl mx-auto'>
        <div className='space-y-4'>
          <h1 className='text-2xl font-bold'>
            Ben Berkay Mehmet Sert. Bursa'da yaşayan Dijital Ürün
            Tasarımcısıyım.
          </h1>
          <p>
            Tasarım araçları, front-end teknolojileri, sokak fotoğrafçılığı ve
            tipografi gibi konularla yakından ilgileniyorum.
          </p>
          <p>
            Sektördeki eski teknoloji ve alışkanlıkları yenilerle değiştirmek
            için youtube kanalımda modern türkçe içerikler üretiyorum.
          </p>
        </div>
      </div>
      <div className='max-w-4xl mx-auto mt-10'>
        <img src='/img-1.jpg' alt='image 1' />
      </div>
    </>
  );
}
