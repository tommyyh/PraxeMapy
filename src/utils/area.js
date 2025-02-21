import { closeModal } from './modal';

// Remove polyline from state
export const removePolyline = (type, options, setOptions, modal) => {
  const polylinesUpdated = options.polylines.filter(
    (polyline) => polyline.id !== modal[type].id
  );

  setOptions({ ...options, polylines: polylinesUpdated });
};

// Cancel changes from editing
export const cancelChanges = (
  type,
  options,
  setOptions,
  modal,
  setModal,
  plural = 'markers'
) => {
  const isPolyline = modal.area.points === 'multiple' && type === 'area';

  // Remove polyline or markers
  if (isPolyline) {
    removePolyline(type, options, setOptions, modal);
  } else {
    const itemsUpdated = options[plural].filter(
      (item) => item.id !== modal[type].id
    );

    setOptions({ ...options, [plural]: itemsUpdated });
  }

  closeModal(type, setModal, modal);
};

// Revert polyline by 1
export const revert = (type, options, setOptions, modal, setModal) => {
  const findPolyline = options.polylines.find(
    (polyline) => polyline.id === modal[type].id
  );

  // If polyline has last position and reverts -> remove
  if (findPolyline.position.length <= 1) {
    removePolyline(type, options, setOptions, modal);
    return closeModal(type, setModal, modal);
  }

  const updatedPolylines = options.polylines.map((polyline) =>
    polyline.id === modal[type].id
      ? { ...polyline, position: [...polyline.position].slice(0, -1) }
      : polyline
  );

  setOptions({ ...options, polylines: updatedPolylines });
};
