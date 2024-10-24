function AuraButton({ aura, changeAura }) {
  const btnColor = (aura) => {
    if (aura > 10 && aura < 100) { // 11 sampai 99
      return 'info';
    } else if (aura >= 100) { // 100++
      return 'success';
    } else if (aura < 0 && aura > -100) { // -1 sampai -99
      return 'warning';
    } else if (aura <= -100) { // -100 dan lebih kecil
      return 'danger';
    } else { // 0 sampai 10
      return 'light';
    }
  }

  return(
    <button
      className={`btn btn-outline-${btnColor(aura)} mx-1`}
      onClick={() => changeAura(aura)}
    >
      {aura} aura
    </button>
  );
}

export default AuraButton;