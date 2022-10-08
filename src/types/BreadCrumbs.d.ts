declare namespace IBreadCrumbComponent {
  export interface IProps {
    links: ILink[];
    className?: string;
  }
}

export interface ILink {
  link: string;
  label: string;
}

export { IBreadCrumbComponent };
