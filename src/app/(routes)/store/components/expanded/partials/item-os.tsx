import { cn } from "@/lib/utils";

type PlatformType = 'mac' | 'windows' | 'linux';
type PlatformKey = keyof typeof platformTranslations;

const platformTranslations: Record<PlatformType, string> = {
  mac: 'osx',
  windows: 'windows',
  linux: 'linux'
};

export const ProductItemOS = ({ os, platforms }: any) => {
// Convert the platforms object into an array of active platforms
const activePlatforms = (Object.keys(platforms) as PlatformKey[])
                                .filter((platform) => platforms[platform])
                                .map(translatePlatform);

  return (
    <div
      _ngcontent-gogcom-store-c47=""
      className="ng-tns-c47-15"
      _nghost-gogcom-store-c32=""
      selenium-id="productTileExtendedOperatingSystems"
    >
      {activePlatforms.map((osItem: string) => (
        <OSItem key={osItem} os={osItem} />
      ))}
    </div>
  );
};

const translatePlatform = (platform: PlatformType): string => {
  return platformTranslations[platform] || platform;
}

const OSItem = ({ os }: any) => (
  <span
    _ngcontent-gogcom-store-c32=""
    className={cn(`icon-${os} ng-star-inserted`)}
    style={{}}
  />
);
