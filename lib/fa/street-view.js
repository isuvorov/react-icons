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

var FaStreetView = function (_React$Component) {
    _inherits(FaStreetView, _React$Component);

    function FaStreetView() {
        _classCallCheck(this, FaStreetView);

        return _possibleConstructorReturn(this, (FaStreetView.__proto__ || Object.getPrototypeOf(FaStreetView)).apply(this, arguments));
    }

    _createClass(FaStreetView, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.9 34.3q0 1.4-1.3 2.5t-3.7 1.8-5 1.1-5.7 0.3-5.6-0.3-5.1-1.1-3.6-1.8-1.4-2.5q0-1.1 0.7-2t2.1-1.5 2.6-1 2.9-0.6q0.6-0.1 1.1 0.2t0.6 0.9q0.1 0.6-0.3 1.1t-0.9 0.6q-1.3 0.2-2.3 0.5t-1.8 0.6-1 0.5-0.7 0.4-0.1 0.3q0 0.3 0.6 0.6t1.6 0.7 2.5 0.8 3.6 0.5 4.5 0.2 4.5-0.2 3.6-0.5 2.5-0.8 1.7-0.7 0.6-0.6q0-0.1-0.2-0.3t-0.6-0.4-1.1-0.5-1.7-0.6-2.4-0.5q-0.6-0.1-0.9-0.6t-0.2-1.1q0-0.5 0.5-0.9t1.1-0.2q1.6 0.2 2.9 0.6t2.7 1 2 1.5 0.7 2z m-8.5-20v8.6q0 0.5-0.5 1t-1 0.4h-1.4v8.6q0 0.5-0.4 1t-1 0.4h-5.7q-0.6 0-1-0.4t-0.5-1v-8.6h-1.4q-0.6 0-1-0.4t-0.4-1v-8.6q0-1.2 0.8-2t2-0.9h8.6q1.2 0 2 0.9t0.9 2z m-2.2-8.6q0 2.1-1.4 3.6t-3.6 1.4-3.5-1.4-1.5-3.6 1.5-3.5 3.5-1.5 3.6 1.5 1.4 3.5z' })
                )
            );
        }
    }]);

    return FaStreetView;
}(React.Component);

exports.default = FaStreetView;
module.exports = exports['default'];