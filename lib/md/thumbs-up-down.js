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

var MdThumbsUpDown = function (_React$Component) {
    _inherits(MdThumbsUpDown, _React$Component);

    function MdThumbsUpDown() {
        _classCallCheck(this, MdThumbsUpDown);

        return _possibleConstructorReturn(this, (MdThumbsUpDown.__proto__ || Object.getPrototypeOf(MdThumbsUpDown)).apply(this, arguments));
    }

    _createClass(MdThumbsUpDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.5 16.6q1.1 0 1.8 0.8t0.7 1.7v10.9q0 1.1-0.7 1.8l-8.3 8.2-1.3-1.3q-0.6-0.6-0.6-1.4 0.3-1 0.7-3.1t0.5-2.6h-8.7q-0.7 0-1.1-0.4t-0.5-1.2v-2.1q0-0.2 0.2-0.9l3.8-8.8q0.7-1.6 2.3-1.6h11.2z m-17.5-6.6v2.1q0 0.2-0.2 0.9l-3.8 8.8q-0.7 1.6-2.2 1.6h-11.3q-1.1 0-1.8-0.8t-0.7-1.7v-10.9q0-1.1 0.7-1.8l8.3-8.2 1.3 1.3q0.6 0.6 0.6 1.4-0.3 1.1-0.7 3.1t-0.5 2.6h8.7q0.7 0 1.1 0.4t0.5 1.2z' })
                )
            );
        }
    }]);

    return MdThumbsUpDown;
}(React.Component);

exports.default = MdThumbsUpDown;
module.exports = exports['default'];