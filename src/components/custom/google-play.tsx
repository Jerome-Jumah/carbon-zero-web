import { Link } from "react-router-dom";
function GooglePlayButton() {
  return (
    <Link to="https://appdistribution.firebase.google.com/testerapps/1:581400212875:android:a68d8eeea6323ec5a7ab8e/releases/6l3s3l6k8inpg?utm_source=firebase-console">
      <div className="flex flex-row mt-10 px-4 py-2 rounded-xl border-2 justify-center items-center border-primary w-56 cursor-pointer hover:bg-primary-foreground">
        <div>
          <img src="/google-play.png" alt="google play icon" height={60} width={60} />
        </div>
        <div className="flex flex-col">
          <h6 className="text-xs">GET IT ON</h6>
          <h3 className="text-xl font-bold">Google Play</h3>
        </div>
      </div>
    </Link>
  );
}

export { GooglePlayButton };
