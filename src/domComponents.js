export const container = () => {
    const chartContainer = document.createElement('div');
    document.body.appendChild(chartContainer).setAttribute('id', 'container');

    const title = document.createElement('div')
    chartContainer.appendChild(title).setAttribute('id', 'title')
    title.textContent = 'UNITED STATES GDP'
}