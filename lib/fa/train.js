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

var FaTrain = function (_React$Component) {
    _inherits(FaTrain, _React$Component);

    function FaTrain() {
        _classCallCheck(this, FaTrain);

        return _possibleConstructorReturn(this, (FaTrain.__proto__ || Object.getPrototypeOf(FaTrain)).apply(this, arguments));
    }

    _createClass(FaTrain, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.3 0q4.1 0 7.1 2.1t2.9 5v20q0 2.9-2.8 5t-6.8 2.2l4.7 4.5q0.4 0.3 0.2 0.8t-0.7 0.4h-23.5q-0.5 0-0.7-0.4t0.2-0.8l4.7-4.5q-4-0.2-6.8-2.2t-2.8-5v-20q0-2.9 2.9-5t7.1-2.1h14.3z m-7.2 30q1.8 0 3.1-1.2t1.2-3.1-1.2-3-3.1-1.3-3 1.3-1.2 3 1.2 3.1 3 1.2z m12.9-12.9v-11.4h-25.7v11.4h25.7z' })
                )
            );
        }
    }]);

    return FaTrain;
}(React.Component);

exports.default = FaTrain;
module.exports = exports['default'];