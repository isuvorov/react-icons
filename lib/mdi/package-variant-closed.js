'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiPackageVariantClosed = function (_React$Component) {
    _inherits(MdiPackageVariantClosed, _React$Component);

    function MdiPackageVariantClosed() {
        _classCallCheck(this, MdiPackageVariantClosed);

        return _possibleConstructorReturn(this, (MdiPackageVariantClosed.__proto__ || Object.getPrototypeOf(MdiPackageVariantClosed)).apply(this, arguments));
    }

    _createClass(MdiPackageVariantClosed, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21,16.5C 21,16.8812 20.7867,17.2125 20.473,17.3813L 12.5664,21.8243C 12.4054,21.9351 12.2103,22 12,22C 11.7897,22 11.5946,21.9351 11.4336,21.8243L 3.52716,17.3814C 3.21335,17.2127 3,16.8812 3,16.5L 3,7.5C 3,7.11876 3.21334,6.78735 3.52716,6.61864L 11.4336,2.17575C 11.5946,2.0649 11.7897,2.00001 12,2.00001C 12.2103,2.00001 12.4053,2.06489 12.5664,2.17574L 20.473,6.61872C 20.7867,6.78746 21,7.11883 21,7.5L 21,16.5 Z M 12.0009,4.15093L 10.1059,5.21585L 15.9846,8.60989L 17.9591,7.5L 12.0009,4.15093 Z M 6.04124,7.50001L 12.0009,10.8491L 13.9578,9.74913L 8.07888,6.35494L 6.04124,7.50001 Z M 5,15.9149L 11,19.2866L 11,12.5806L 5,9.20901L 5,15.9149 Z M 19,15.9149L 19,9.20901L 13,12.5806L 13,19.2875L 19,15.9149 Z ' })
                )
            );
        }
    }]);

    return MdiPackageVariantClosed;
}(React.Component);

exports.default = MdiPackageVariantClosed;
module.exports = exports['default'];