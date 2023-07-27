"use client";

import { Fragment, useState } from "react";

import { cn } from "@/lib/utils";

import {
  Input,
  InputAlt,
  InputAltContainer,
  InputContainer,
} from "./body/filter-body-dlc";
import { PriceBodyData, PriceContainer } from "./body/filter-body-price";

export const FilterItem = ({ title, Content }: any) => {
  const [isOpen, setOpen] = useState(false);

  const onToggle = () => setOpen(!isOpen);

  return (
    <div className="filters__item ng-star-inserted">
      <div className="ng-tns-c64-0 ng-star-inserted">
        <div
          onClick={onToggle}
          className={cn(
            "collapsible-section__header ng-tns-c64-0 animate",
            isOpen ? "section-open " : ""
          )}
          selenium-id="collapsibleSectionHeader"
        >
          <div className="collapsible-section__icon-wrapper ng-tns-c64-0">
            <span className="collapsible-section__icon icon-angle-right ng-tns-c64-0" />
          </div>
          <div className="filter__header ng-tns-c64-0">
            <h4 selenium-id="filterDLCName">{title}</h4>
          </div>
        </div>
        <div
          className="collapsible-section__body ng-tns-c64-0 ng-trigger ng-trigger-openClose ng-animating"
          selenium-id="collapsibleSectionBody"
          style={{ height: isOpen ? "auto" : 0 }}
        >
          {Content}
        </div>
      </div>
    </div>
  );
};

const WrapperComponent = ({ type, children }: any) => {
  if (type === "checkbox") return <InputContainer>{children}</InputContainer>;
  if (type === "checkbox-alt")
    return <InputAltContainer>{children}</InputAltContainer>;

  if (type === "price") return <PriceContainer>{children}</PriceContainer>;
};

type ComponentType = "checkbox" | "checkbox-alt" | "price";

const componentMapping: Record<ComponentType, React.ComponentType<any>> = {
  checkbox: Input,
  "checkbox-alt": InputAlt,
  price: PriceBodyData,
};

const containerMapping: Record<ComponentType, React.ComponentType<any>> = {
  checkbox: InputContainer,
  "checkbox-alt": InputAltContainer,
  price: PriceContainer,
};

export interface FilterItemDataProps {
  title: string;
  type: ComponentType;
  content: any[];
}

export const FilterItemData: React.FC<FilterItemDataProps> = ({
  title,
  type,
  content,
}) => {
  const [isOpen, setOpen] = useState(false);
  const onToggle = () => setOpen(!isOpen);
  const Component = componentMapping[type];
  const Container = containerMapping[type];

  return (
    <div className="filters__item ng-star-inserted">
      <div className="ng-tns-c64-0 ng-star-inserted">
        <div
          onClick={onToggle}
          className={cn(
            "collapsible-section__header ng-tns-c64-0 animate",
            isOpen ? "section-open " : ""
          )}
          selenium-id="collapsibleSectionHeader"
        >
          <div className="collapsible-section__icon-wrapper ng-tns-c64-0">
            <span className="collapsible-section__icon icon-angle-right ng-tns-c64-0" />
          </div>
          <div className="filter__header ng-tns-c64-0">
            <h4 selenium-id="filterDLCName">{title}</h4>
          </div>
        </div>
        <div
          className="collapsible-section__body ng-tns-c64-0 ng-trigger ng-trigger-openClose ng-animating"
          selenium-id="collapsibleSectionBody"
          style={{ height: isOpen ? "auto" : 0 }}
        >
          <Container type={type}>
            {content.map((item: any) => (
              <Fragment key={item.title}>
                <Component {...item} />
              </Fragment>
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
};
