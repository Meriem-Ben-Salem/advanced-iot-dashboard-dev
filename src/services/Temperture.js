import axios from "axios";

//*******************************************************token******************************************************************//
const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW1fYmVuc2FsZW1Ab3V0bG9vay5mciIsInNjb3BlcyI6WyJURU5BTlRfQURNSU4iXSwidXNlcklkIjoiMGM4M2UzNzAtOGJkZi0xMWViLWE3M2YtZGJiNTNlMzRlMmFjIiwiZmlyc3ROYW1lIjoiQmVuIFNhbGVtIiwibGFzdE5hbWUiOiJNYXJpZW0gIiwiZW5hYmxlZCI6dHJ1ZSwiaXNQdWJsaWMiOmZhbHNlLCJ0ZW5hbnRJZCI6IjM2NWRmNTYwLThiZGUtMTFlYi1hNzNmLWRiYjUzZTM0ZTJhYyIsImN1c3RvbWVySWQiOiIxMzgxNDAwMC0xZGQyLTExYjItODA4MC04MDgwODA4MDgwODAiLCJpc3MiOiJ0aGluZ3Nib2FyZC5pbyIsImlhdCI6MTYxNzExMjE2NCwiZXhwIjoxNjE3MTIxMTY0fQ.gwlsgi7HqmFSF3fheviXXH7FI4DFJsw4yqsmt158AW5HhfTwY30vXouZtPdGnGIl_p2AxqVDVstaSdUwahRPUA'

//*************************************************getListTempRequest*********************************************************//
export const getListTempRequest = async () => {
  const wsResponse = await axios.request({
    method: 'get',
    url: `https://things.sofia-networks.com/api/plugins/telemetry/DEVICE/5433a250-8bdf-11eb-a73f-dbb53e34e2ac/values/timeseries?useStrictDataTypes=false`,

    headers: {
      'X-Authorization': token
    }
  });
  console.log(wsResponse.data)

  return wsResponse.data;
}

//*************************************************getSeriesRequest******************************************************//
export const getSeriesRequest = async (obj) => {
  const wsResponse = await axios.request({
    method: 'get',
    url: `https://things.sofia-networks.com/api/plugins/telemetry/DEVICE/5433a250-8bdf-11eb-a73f-dbb53e34e2ac/values/timeseries?limit=10&agg=NONE&orderBy=DESC&useStrictDataTypes=false&keys=${obj.keys}&startTs=${obj.startTs}&endTs=${obj.endTs}`,

    headers: {
      'X-Authorization': token
    }
  });
  console.log(wsResponse.data)

  return wsResponse.data;
}

