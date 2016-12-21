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

var FaTh = function (_React$Component) {
    _inherits(FaTh, _React$Component);

    function FaTh() {
        _classCallCheck(this, FaTh);

        return _possibleConstructorReturn(this, (FaTh.__proto__ || Object.getPrototypeOf(FaTh)).apply(this, arguments));
    }

    _createClass(FaTh, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.4 27.9v4.2q0 0.9-0.6 1.6t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.6v-4.2q0-0.9 0.6-1.6t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.6z m0-11.5v4.3q0 0.9-0.6 1.5t-1.5 0.7h-7.2q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.5z m14.3 11.5v4.2q0 0.9-0.6 1.6t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.6v-4.2q0-0.9 0.6-1.6t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.6z m-14.3-22.9v4.3q0 0.9-0.6 1.5t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.5z m14.3 11.4v4.3q0 0.9-0.6 1.5t-1.5 0.7h-7.2q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.5z m14.3 11.5v4.2q0 0.9-0.6 1.6t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.6v-4.2q0-0.9 0.6-1.6t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.6z m-14.3-22.9v4.3q0 0.9-0.6 1.5t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.5z m14.3 11.4v4.3q0 0.9-0.6 1.5t-1.5 0.7h-7.2q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.5z m0-11.4v4.3q0 0.9-0.6 1.5t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.5z' })
                )
            );
        }
    }]);

    return FaTh;
}(React.Component);

exports.default = FaTh;
module.exports = exports['default'];