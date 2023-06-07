import '../styles/status.css'

export default function StatusBadge({ startDate, endDate }) {
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let status = "Draft";
    let color = "#7F86AD";
    if (end < currentDate) {
        status = "Ended";
        color = "red";
    }
    else if (currentDate > start && currentDate < end) {
        status = "Live";
        color = "#0BD680";
    }
    return (
        <div class="status-badge" style={{ background: color }}>
            {status === "Live" && <div></div>}{status}
        </div>
    );
}