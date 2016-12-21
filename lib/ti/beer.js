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

var TiBeer = function (_React$Component) {
    _inherits(TiBeer, _React$Component);

    function TiBeer() {
        _classCallCheck(this, TiBeer);

        return _possibleConstructorReturn(this, (TiBeer.__proto__ || Object.getPrototypeOf(TiBeer)).apply(this, arguments));
    }

    _createClass(TiBeer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.7 27.5c0 0.5-0.4 0.8-0.9 0.8s-0.8-0.3-0.8-0.8v-10c0-0.5 0.4-0.8 0.8-0.8s0.9 0.3 0.9 0.8v10z m3.3 0c0 0.5-0.4 0.8-0.8 0.8s-0.9-0.3-0.9-0.8v-10c0-0.5 0.4-0.8 0.9-0.8s0.8 0.3 0.8 0.8v10z m3.3 0c0 0.5-0.3 0.8-0.8 0.8s-0.8-0.3-0.8-0.8v-10c0-0.5 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8v10z m7.5-17.5h-0.8v-1.7c0-1.8-1.5-3.3-3.3-3.3h-15c-1.9 0-3.4 1.5-3.4 3.3v21.7c0 2.8 2.3 5 5 5h11.7c2.8 0 5-2.2 5-5h0.8c3.3 0 5.9-2.6 5.9-5.8v-8.4c0-3.2-2.6-5.8-5.9-5.8z m-19.1-1.7h15v1.7h-7.4l-0.2 0.6c-0.3 0.7-1.1 1.2-1.9 1l-0.6-0.1-0.3 0.5c-0.4 0.8-1.2 1.3-2.1 1.3-1.4 0-2.5-1.1-2.5-2.5v-2.5z m15 21.7c0 0.9-0.8 1.7-1.7 1.7h-11.7c-0.9 0-1.6-0.8-1.6-1.7v-15.8c0.7 0.5 1.5 0.8 2.5 0.8 1.3 0 2.5-0.6 3.3-1.7 1.2 0 2.3-0.6 2.9-1.6h6.3v18.3z m6.6-5.8c0 1.3-1.1 2.5-2.5 2.5h-2.5v-13.4h2.5c1.4 0 2.5 1.2 2.5 2.5v8.4z' })
                )
            );
        }
    }]);

    return TiBeer;
}(React.Component);

exports.default = TiBeer;
module.exports = exports['default'];