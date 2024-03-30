import { Separator } from "@/components/ui/separator";
import AppearanceForm from "@/components/settings/appearance-form";

const SettingsPage = async () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">General</h3>
        <p className="text-sm text-muted-foreground">
          Manage font family, color theme, and other appearance settings.
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  );
};

export default SettingsPage;
