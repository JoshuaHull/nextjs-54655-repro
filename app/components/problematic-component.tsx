"use server";


export const ProblematicComponent = () => {
  return <div>I am breaking the build on 13.5+ as I am exported twice</div>;
}

export default ProblematicComponent;
