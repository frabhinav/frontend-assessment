import apple from "../assets/apple.png";
import android from "../assets/android.png";
import mobileImage from "../assets/mobile.png";

const MobileComponent = () => {
  return (
    <div className="bg-[#1C4670] text-white md:px-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-4">
            Manage Your Services by your Mobile Phone
          </h2>
          <p className="text-gray-300 mb-8">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>

          <div className="space-y-4">
            <h3 className="font-medium">Get the App</h3>
            <div className="flex flex-wrap gap-4 py-4">
              <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                <img src={apple} alt="App Store" className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-medium">App Store</div>
                </div>
              </button>

              <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                <img src={android} alt="Google Play" className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] hidden md:block overflow-hidden">
          <div className="absolute right-0 top-0">
            <img
              src={mobileImage}
              width={700}
              height={600}
              className="object-cover max-w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileComponent;
