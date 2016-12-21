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

var MdiMapMarkerMinus = function (_React$Component) {
    _inherits(MdiMapMarkerMinus, _React$Component);

    function MdiMapMarkerMinus() {
        _classCallCheck(this, MdiMapMarkerMinus);

        return _possibleConstructorReturn(this, (MdiMapMarkerMinus.__proto__ || Object.getPrototypeOf(MdiMapMarkerMinus)).apply(this, arguments));
    }

    _createClass(MdiMapMarkerMinus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8.99931,11.4981C 10.3803,11.4981 11.4993,10.3791 11.4993,8.99813C 11.4993,7.61715 10.3803,6.49813 8.99931,6.49813C 7.61931,6.49813 6.49931,7.61715 6.49931,8.99813C 6.49931,10.3791 7.61931,11.4981 8.99931,11.4981 Z M 8.99931,1.99813C 12.8643,1.99813 15.9993,5.13208 15.9993,8.99813C 15.9993,14.2481 8.99931,21.9981 8.99931,21.9981C 8.99931,21.9981 1.99931,14.2481 1.99931,8.99813C 1.99931,5.13208 5.13432,1.99813 8.99931,1.99813 Z M 15,17L 23,17L 23,19L 15,19L 15,17 Z ' })
                )
            );
        }
    }]);

    return MdiMapMarkerMinus;
}(React.Component);

exports.default = MdiMapMarkerMinus;
module.exports = exports['default'];