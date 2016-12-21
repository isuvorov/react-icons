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

var FaOpera = function (_React$Component) {
    _inherits(FaOpera, _React$Component);

    function FaOpera() {
        _classCallCheck(this, FaOpera);

        return _possibleConstructorReturn(this, (FaOpera.__proto__ || Object.getPrototypeOf(FaOpera)).apply(this, arguments));
    }

    _createClass(FaOpera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.3 5.1q-3.7-2.5-8-2.5-3.4 0-6.5 1.7t-5.4 4.4q-1.7 2.1-2.7 4.9t-1 5.9v1q0.1 3.1 1 5.9t2.7 4.9q2.3 2.8 5.4 4.4t6.5 1.7q4.3 0 8-2.5-2.7 2.4-6.1 3.8t-7.2 1.3q-0.6 0-1 0-3.9-0.2-7.4-1.9t-6.1-4.3-4-6.2-1.5-7.6q0-4.1 1.6-7.8t4.2-6.4 6.4-4.2 7.8-1.6h0.1q3.7 0 7.1 1.4t6.1 3.7z m6.7 14.9q0 4.3-1.7 8.1t-4.8 6.6q-2.3 1.4-4.9 1.4-3.1 0-5.7-1.9 3.4-1.2 5.6-5.2t2.3-9q0-5.1-2.3-9t-5.6-5.2q2.7-1.9 5.7-1.9 2.6 0 5 1.5 3 2.7 4.7 6.5t1.7 8.1z' })
                )
            );
        }
    }]);

    return FaOpera;
}(React.Component);

exports.default = FaOpera;
module.exports = exports['default'];