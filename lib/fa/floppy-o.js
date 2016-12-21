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

var FaFloppyO = function (_React$Component) {
    _inherits(FaFloppyO, _React$Component);

    function FaFloppyO() {
        _classCallCheck(this, FaFloppyO);

        return _possibleConstructorReturn(this, (FaFloppyO.__proto__ || Object.getPrototypeOf(FaFloppyO)).apply(this, arguments));
    }

    _createClass(FaFloppyO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.6 34.3h17.1v-8.6h-17.1v8.6z m20 0h2.8v-20q0-0.3-0.2-0.9t-0.4-0.7l-6.3-6.3q-0.2-0.2-0.8-0.5t-0.8-0.2v9.3q0 0.9-0.7 1.5t-1.5 0.6h-12.8q-0.9 0-1.6-0.6t-0.6-1.5v-9.3h-2.8v28.6h2.8v-9.3q0-0.9 0.6-1.5t1.6-0.6h18.5q0.9 0 1.5 0.6t0.7 1.5v9.3z m-8.6-20.7v-7.2q0-0.3-0.2-0.5t-0.5-0.2h-4.3q-0.3 0-0.5 0.2t-0.2 0.5v7.2q0 0.3 0.2 0.5t0.5 0.2h4.3q0.3 0 0.5-0.2t0.2-0.5z m14.3 0.7v20.7q0 0.9-0.6 1.5t-1.6 0.6h-30q-0.8 0-1.5-0.6t-0.6-1.5v-30q0-0.9 0.6-1.5t1.5-0.6h20.8q0.9 0 1.9 0.4t1.7 1.1l6.3 6.2q0.6 0.6 1 1.7t0.5 2z' })
                )
            );
        }
    }]);

    return FaFloppyO;
}(React.Component);

exports.default = FaFloppyO;
module.exports = exports['default'];