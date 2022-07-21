type InputData = Object | string;

const PrettyData = ({ data }: { data: InputData }) => {
  let objData;

  if (typeof (data) === "string") {
    objData = JSON.parse(data);
  } else if (typeof (data) === "object") {
    objData = data;
  } else {
    throw new Error(
      `Error! PrettyData only takes an object or string. Got ${typeof (data)}`,
    );
  }

  return (
    <div>
      <pre>{JSON.stringify(objData, null, 2)}</pre>
    </div>
  );
};

export default PrettyData;
