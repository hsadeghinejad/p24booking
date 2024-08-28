// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: w8Roqs5CeKXUVajBnjnyHA
// Component: D8nfHqzg7emF

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: w8Roqs5CeKXUVajBnjnyHA/projectcss
import sty from "./PlasmicSubUserCard.module.css"; // plasmic-import: D8nfHqzg7emF/css

import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import WhatsappIcon from "../fragment_icons/icons/PlasmicIcon__Whatsapp"; // plasmic-import: oob3UzcKBsd_/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon
import EitaaIcon from "../fragment_icons/icons/PlasmicIcon__Eitaa"; // plasmic-import: qxWwW7vbw7na/icon

createPlasmicElementProxy;

export type PlasmicSubUserCard__VariantMembers = {
  selected: "selected";
};
export type PlasmicSubUserCard__VariantsArgs = {
  selected?: SingleBooleanChoiceArg<"selected">;
};
type VariantPropType = keyof PlasmicSubUserCard__VariantsArgs;
export const PlasmicSubUserCard__VariantProps = new Array<VariantPropType>(
  "selected"
);

export type PlasmicSubUserCard__ArgsType = {
  subUser?: any;
  onBook?: (messenger: string) => void;
  onClick?: (event: any) => void;
  displayMessengers?: boolean;
};
type ArgPropType = keyof PlasmicSubUserCard__ArgsType;
export const PlasmicSubUserCard__ArgProps = new Array<ArgPropType>(
  "subUser",
  "onBook",
  "onClick",
  "displayMessengers"
);

export type PlasmicSubUserCard__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultSubUserCardProps {
  subUser?: any;
  onBook?: (messenger: string) => void;
  onClick?: (event: any) => void;
  displayMessengers?: boolean;
  selected?: SingleBooleanChoiceArg<"selected">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSubUserCard__RenderFunc(props: {
  variants: PlasmicSubUserCard__VariantsArgs;
  args: PlasmicSubUserCard__ArgsType;
  overrides: PlasmicSubUserCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          displayMessengers: false
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "selected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.selected
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_fragment_design_system_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        { [sty.rootselected]: hasVariant($state, "selected", "selected") }
      )}
      onClick={args.onClick}
    >
      <div className={classNames(projectcss.all, sty.freeBox__ckgeg)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__kak4C)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___7Hv9V
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.subUser.name + " " + $props.subUser.family;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ul6Xo
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.subUser.cell;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </Stack__>
        <div className={classNames(projectcss.all, sty.freeBox__r3OmY)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__i5O47
            )}
          >
            {"\u0648\u06cc\u0631\u0627\u06cc\u0634"}
          </div>
        </div>
      </div>
      {(
        hasVariant($state, "selected", "selected")
          ? (() => {
              try {
                return $props.displayMessengers;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })()
          : true
      ) ? (
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__xVs4S, {
            [sty.freeBoxselected__xVs4SpnXkH]: hasVariant(
              $state,
              "selected",
              "selected"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__gbHGu
            )}
          >
            {
              "\u0627\u0632 \u06a9\u062f\u0627\u0645 \u067e\u06cc\u0627\u0645 \u0631\u0633\u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u062f\u061f"
            }
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__kj9Hl)}
          >
            <Button
              children2={
                <React.Fragment>
                  <WhatsappIcon
                    className={classNames(projectcss.all, sty.svg__vApD)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sFwYa
                    )}
                  >
                    {"\u0648\u0627\u062a\u0633\u0627\u067e"}
                  </div>
                </React.Fragment>
              }
              className={classNames("__wab_instance", sty.button__p8D1U)}
              color={"sand"}
              onClick={async event => {
                const $steps = {};

                $steps["runOnBook"] = true
                  ? (() => {
                      const actionArgs = {
                        eventRef: $props["onBook"],
                        args: ["whatsapp"]
                      };
                      return (({ eventRef, args }) => {
                        return eventRef?.(...(args ?? []));
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["runOnBook"] != null &&
                  typeof $steps["runOnBook"] === "object" &&
                  typeof $steps["runOnBook"].then === "function"
                ) {
                  $steps["runOnBook"] = await $steps["runOnBook"];
                }
              }}
              outline={true}
            />

            <Button
              children2={
                <React.Fragment>
                  <EitaaIcon
                    className={classNames(projectcss.all, sty.svg__as81X)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hBmL
                    )}
                  >
                    {"\u0627\u06cc\u062a\u0627"}
                  </div>
                </React.Fragment>
              }
              className={classNames("__wab_instance", sty.button___9CVqn)}
              color={"sand"}
              onClick={async event => {
                const $steps = {};

                $steps["runOnBook"] = true
                  ? (() => {
                      const actionArgs = {
                        eventRef: $props["onBook"],
                        args: ["eitaa"]
                      };
                      return (({ eventRef, args }) => {
                        return eventRef?.(...(args ?? []));
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["runOnBook"] != null &&
                  typeof $steps["runOnBook"] === "object" &&
                  typeof $steps["runOnBook"].then === "function"
                ) {
                  $steps["runOnBook"] = await $steps["runOnBook"];
                }
              }}
              outline={true}
            />
          </Stack__>
        </Stack__>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSubUserCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSubUserCard__VariantsArgs;
    args?: PlasmicSubUserCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSubUserCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSubUserCard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSubUserCard__ArgProps,
          internalVariantPropNames: PlasmicSubUserCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSubUserCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSubUserCard";
  } else {
    func.displayName = `PlasmicSubUserCard.${nodeName}`;
  }
  return func;
}

export const PlasmicSubUserCard = Object.assign(
  // Top-level PlasmicSubUserCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSubUserCard
    internalVariantProps: PlasmicSubUserCard__VariantProps,
    internalArgProps: PlasmicSubUserCard__ArgProps
  }
);

export default PlasmicSubUserCard;
/* prettier-ignore-end */
