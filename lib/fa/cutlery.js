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

var FaCutlery = function (_React$Component) {
    _inherits(FaCutlery, _React$Component);

    function FaCutlery() {
        _classCallCheck(this, FaCutlery);

        return _possibleConstructorReturn(this, (FaCutlery.__proto__ || Object.getPrototypeOf(FaCutlery)).apply(this, arguments));
    }

    _createClass(FaCutlery, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.8 1.4v14.3q0 1.4-0.8 2.5t-2.1 1.6v17.3q0 1.2-0.8 2.1t-2 0.8h-2.9q-1.1 0-2-0.8t-0.8-2.1v-17.3q-1.3-0.5-2.1-1.6t-0.8-2.5v-14.3q0-0.6 0.4-1t1-0.4 1 0.4 0.5 1v9.3q0 0.6 0.4 1t1 0.4 1-0.4 0.4-1v-9.3q0-0.6 0.4-1t1-0.4 1 0.4 0.5 1v9.3q0 0.6 0.4 1t1 0.4 1-0.4 0.4-1v-9.3q0-0.6 0.4-1t1.1-0.4 1 0.4 0.4 1z m17.1 0v35.7q0 1.2-0.8 2.1t-2 0.8h-2.9q-1.1 0-2-0.8t-0.8-2.1v-11.4h-5q-0.3 0-0.5-0.2t-0.3-0.5v-17.9q0-2.9 2.1-5t5.1-2.1h5.7q0.6 0 1 0.4t0.4 1z' })
                )
            );
        }
    }]);

    return FaCutlery;
}(React.Component);

exports.default = FaCutlery;
module.exports = exports['default'];