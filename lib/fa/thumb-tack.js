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

var FaThumbTack = function (_React$Component) {
    _inherits(FaThumbTack, _React$Component);

    function FaThumbTack() {
        _classCallCheck(this, FaThumbTack);

        return _possibleConstructorReturn(this, (FaThumbTack.__proto__ || Object.getPrototypeOf(FaThumbTack)).apply(this, arguments));
    }

    _createClass(FaThumbTack, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.7 19.3v-10q0-0.3-0.2-0.5t-0.5-0.2-0.5 0.2-0.2 0.5v10q0 0.3 0.2 0.5t0.5 0.2 0.5-0.2 0.2-0.5z m15 7.8q0 0.6-0.4 1t-1 0.5h-9.6l-1.1 10.8q-0.1 0.2-0.3 0.4t-0.4 0.2h0q-0.6 0-0.8-0.6l-1.7-10.8h-9q-0.6 0-1-0.5t-0.4-1q0-2.7 1.8-4.9t3.9-2.2v-11.4q-1.1 0-2-0.9t-0.8-2 0.8-2 2-0.8h14.3q1.2 0 2 0.8t0.9 2-0.9 2-2 0.9v11.4q2.2 0 4 2.2t1.7 4.9z' })
                )
            );
        }
    }]);

    return FaThumbTack;
}(React.Component);

exports.default = FaThumbTack;
module.exports = exports['default'];