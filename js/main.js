const header = document.querySelector("header");
const boxChart = document.getElementById("box-chart");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slider = document.querySelector(".slider");
// discovers vars
const activeUsersChart = document.querySelector("#active-users-chart");
const questions = document.querySelectorAll(".faq-icon");
// solutions vars
const taxChart = document.querySelector("#tax-chart");
// payment vars
const feeChart = document.querySelector("#fees-chart");
// form vars
const passVisibility = document.querySelectorAll(".pass-visibility");
const otpNums = document.querySelectorAll(".code-num");

if ( header ) {

    const headerIcon = document.querySelector(".header-icon");
    const sidebarIcon = document.querySelector(".sidebar-icon");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });

    headerIcon.addEventListener("click", () => {
        header.classList.add("show");
    })

    sidebarIcon.addEventListener("click", () => {
        header.classList.remove("show");
    })
}

// slider
if (slider) {
    let scrolledSpace = 0;
    const maxLeft = 0;
    const maxRight = slider.scrollWidth - slider.clientWidth - 30;
    const cardWidth = document.querySelector(".slide").clientWidth;

    window.onresize = () => {
        scrolledSpace = 0;
        slider.scrollTo({
            left: 0,
            behavior: "smooth",
        });
    };

    nextBtn.addEventListener("click", () => {
        if (scrolledSpace < maxRight) {
            scrolledSpace += cardWidth + 45;
            slider.scrollTo({
                left: scrolledSpace,
                behavior: "smooth",
            });
        } else {
            return false;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (scrolledSpace > maxLeft) {
            scrolledSpace -= cardWidth + 45;
            slider.scrollTo({
                left: scrolledSpace,
                behavior: "smooth",
            });
        } else {
            return false;
        }
    });
}

// landing page chart
if (boxChart) {
    boxChart.getContext("2d");

    new Chart(boxChart, {
        type: "bar",
        data: {
            labels: ["Jan", "Fab", "Mar", "Apr", "May"],
            datasets: [
                {
                    data: [2, 4, 6, 8, 10],
                    backgroundColor: [
                        "#FFEEED",
                        "#FFEEED",
                        "#FFEEED",
                        "#E6001E",
                        "#FFEEED",
                    ],
                    borderWidth: 0,
                    borderRadius: 3,
                    barThickness: 15,
                    padding: 10,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    backgroundColor: "#E6001E",
                },
            },
            scales: {
                x: {
                    offset: true,
                    grid: {
                        display: false,
                    },
                    ticks: {
                        font: {
                            size: 10,
                        },
                    },
                    border: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
            },
        },
    });
}

// pricing page chart
if (activeUsersChart) {
    const gradient = activeUsersChart
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, "rgba(230, 0, 30, 0.3)");
    gradient.addColorStop(1, "rgba(230, 0, 30, 0)");

    new Chart(activeUsersChart, {
        type: "line",
        data: {
            labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    data: [10000, 28000, 23000, 40000, 35000, 70000],
                    fill: true,
                    borderColor: "#E6001E",
                    pointRadius: 0,
                    borderWidth: 4,
                    backgroundColor: gradient,
                    pointBackgroundColor: "#E6001E",
                    pointHitRadius: 6,
                    pointHoverRadius: 6,
                    pointBorderWidth: 0,
                    tension: 0.4,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: "#4E4E4E",
                        font: {
                            size: 16,
                        },
                    },
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: false,
                tooltip: {
                    enabled: true,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    titleColor: "rgba(0, 0, 0, 0.8)",
                    bodyColor: "rgba(0, 0, 0, 0.8)",
                    bodyFont: {
                        size: 14,
                        weight: "bold",
                    },
                    usePointStyle: true,
                    callbacks: {
                        title: () => {
                            return "";
                        },
                        label: function (tooltipItem) {
                            return tooltipItem.label + ": " + tooltipItem.raw;
                        },
                    },
                    cornerRadius: 10,
                    displayColors: false,
                    cartSize: 10,
                    xAlign: "center",
                    yAlign: "bottom",
                    padding: 6,
                    cartPadding: 30,
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.8)",
                },
            },
        },
    });
}

// pricing page
if (questions) {
    questions.forEach((item) => {
        item.addEventListener("click", () => {
            item.parentElement.classList.toggle("active");
        });
    });
}

// solutions page
if (taxChart) {
    taxChart.getContext("2d");

    new Chart(taxChart, {
        type: "bar",
        data: {
            labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    data: [10, 10, 20, 20, 30, 30],
                    backgroundColor: [
                        "#FFEEED",
                        "#FFEEED",
                        "#FFEEED",
                        "#FFEEED",
                        "#FF3A54",
                        "#FFEEED",
                    ],
                    borderWidth: 0,
                    barThickness: 20,
                    padding: 10,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: "#4E4E4E",
                        font: {
                            size: 10,
                        },
                    },
                    border: {
                        display: false,
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: false,
                tooltip: {
                    enabled: true,
                    bodyColor: "rgba(0, 0, 0, 0.8)",
                    bodyFont: {
                        size: 14,
                    },
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    displayColors: false,
                    xAlign: "center",
                    yAlign: "bottom",
                    callbacks: {
                        title: () => {
                            return "";
                        },
                        label: function (tooltipItem) {
                            return "$" + tooltipItem.raw;
                        },
                    },
                    cornerRadius: 10,
                    borderWidth: 1,
                    padding: 6,
                    borderColor: "rgba(0, 0, 0, 0.8)",
                },
            },
        },
    });
}

// Payment Page
if (feeChart) {
    new Chart(feeChart, {
        type: "bar",
        data: {
            labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    type: "line",
                    data: [500, 1000, 1200, 2000, 2500, 3000],
                    borderColor: "#E6001E",
                    borderWidth: 2,
                    fill: false,
                    pointBackgroundColor: "#DD122D",
                    pointRadius: 0,
                    pointHoverRadius: 4,
                    pointStyle: "circle",
                    tension: 0.2,
                },
                {
                    data: [500, 1000, 1200, 2000, 2500, 3000],
                    backgroundColor: [
                        "#FFEEED",
                        "#FFEEED",
                        "#FFEEED",
                        "#FFEEED",
                        "#FFEEED",
                        "#FFEEED",
                    ],
                    borderWidth: 0,
                    barThickness: 20,
                    padding: 10,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: "#4E4E4E",
                        font: {
                            size: 14,
                        },
                    },
                    border: {
                        display: false,
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: false,
                tooltip: {
                    enabled: true,
                    bodyColor: "rgba(0, 0, 0, 0.8)",
                    bodyFont: {
                        size: 14,
                        weight: "bold"
                    },
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    displayColors: false,
                    xAlign: "center",
                    yAlign: "bottom",
                    callbacks: {
                        title: () => {
                            return "";
                        },
                        label: function (tooltipItem) {
                            return "$" + tooltipItem.raw;
                        },
                    },
                    cornerRadius: 10,
                    borderWidth: 1,
                    padding: 6,
                    borderColor: "rgba(0, 0, 0, 0.8)",
                },
            },
        },
        plugins: [{
            // Custom plugin to draw arrow head
            id: 'arrowPlugin',
            afterDatasetDraw(chart, args, options) {
                const {ctx, chartArea: {top, bottom, left, right}, scales: {x, y}} = chart;
                
                const lastIndex = chart.data.labels.length - 1;
                const secondLastIndex = lastIndex - 1;
                const xLast = x.getPixelForValue(lastIndex);
                const yLast = y.getPixelForValue(chart.data.datasets[0].data[lastIndex]);
                const xPrev = x.getPixelForValue(secondLastIndex);
                const yPrev = y.getPixelForValue(chart.data.datasets[0].data[secondLastIndex]);
                
                const angle = Math.atan2(yLast - yPrev, xLast - xPrev);
    
                // Arrow properties
                const arrowLength = 12;
                const arrowWidth = 6;
                
                ctx.save();
                ctx.translate(xLast, yLast);
                ctx.rotate(angle);
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(-arrowLength, -arrowWidth);
                ctx.lineTo(-arrowLength, arrowWidth);
                ctx.closePath();
                ctx.fillStyle = '#E6001E';
                ctx.fill();
                ctx.restore();
            }
        }]
    });
}

// Form Pages
if ( passVisibility ) {
    passVisibility.forEach(( item ) => {
        item.addEventListener("click", () => {
            item.classList.toggle("visible");
            if ( item.classList.contains("visible") ) {
                item.previousElementSibling.setAttribute("type", "text");
            } else {
                item.previousElementSibling.setAttribute("type", "password");
            }
        });
    })
}

if ( otpNums ) {
    otpNums.forEach(( num, idx ) => {
        num.addEventListener("input", () => {
            if ( num.value.length > 0 && idx < otpNums.length - 1 ) {
                otpNums[ idx + 1 ].focus();
            }
        });

        num.addEventListener("keydown", (e) => {
            if ( e.key == "Backspace" && num.value === "" && idx > 0 ) {
                otpNums[ idx - 1 ].focus();
            }
        })
    })
}