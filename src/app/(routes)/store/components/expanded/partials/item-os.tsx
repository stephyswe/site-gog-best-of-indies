import { cn } from "@/lib/utils";

export const ProductItemOS = ({ os }: any) => (
  <div
    _ngcontent-gogcom-store-c47=""
    className="ng-tns-c47-15"
    _nghost-gogcom-store-c32=""
    selenium-id="productTileExtendedOperatingSystems"
  >
    {os.map((osItem: any) => (
      <OSItem key={osItem} os={osItem} />
    ))}
  </div>
);

const OSItem = ({ os }: any) => (
  <span
    _ngcontent-gogcom-store-c32=""
    className={cn(`icon-${os} ng-star-inserted`)}
    style={{}}
  />
);
