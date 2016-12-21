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

var FaThLarge = function (_React$Component) {
    _inherits(FaThLarge, _React$Component);

    function FaThLarge() {
        _classCallCheck(this, FaThLarge);

        return _possibleConstructorReturn(this, (FaThLarge.__proto__ || Object.getPrototypeOf(FaThLarge)).apply(this, arguments));
    }

    _createClass(FaThLarge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.6 22.9v8.5q0 1.2-0.8 2t-2 0.9h-11.4q-1.2 0-2.1-0.9t-0.8-2v-8.5q0-1.2 0.8-2.1t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2.1z m0-17.2v8.6q0 1.1-0.8 2t-2 0.8h-11.4q-1.2 0-2.1-0.8t-0.8-2v-8.6q0-1.1 0.8-2t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2z m20 17.2v8.5q0 1.2-0.8 2t-2 0.9h-11.4q-1.2 0-2.1-0.9t-0.8-2v-8.5q0-1.2 0.8-2.1t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2.1z m0-17.2v8.6q0 1.1-0.8 2t-2 0.8h-11.4q-1.2 0-2.1-0.8t-0.8-2v-8.6q0-1.1 0.8-2t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2z' })
                )
            );
        }
    }]);

    return FaThLarge;
}(React.Component);

exports.default = FaThLarge;
module.exports = exports['default'];