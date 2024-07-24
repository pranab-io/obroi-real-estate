import PropertySearchForm from '@/components/PropertySearchForm';
import Properties from '@/components/Properties';

async function PropertiesPage() {
  return (
    <>
      <section className="bg-pink-700 py-4">
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>

      <Properties />
    </>
  );
}

export default PropertiesPage;
