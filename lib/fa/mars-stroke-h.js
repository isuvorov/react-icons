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

var FaMarsStrokeH = function (_React$Component) {
    _inherits(FaMarsStrokeH, _React$Component);

    function FaMarsStrokeH() {
        _classCallCheck(this, FaMarsStrokeH);

        return _possibleConstructorReturn(this, (FaMarsStrokeH.__proto__ || Object.getPrototypeOf(FaMarsStrokeH)).apply(this, arguments));
    }

    _createClass(FaMarsStrokeH, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.5 20.4q0.4 0.4 0.4 0.9t-0.4 1l-6.1 6.1q-0.2 0.2-0.5 0.2t-0.5-0.2l-0.9-1q-0.2-0.2-0.2-0.4t0.2-0.5l3.8-3.8h-6.1v4.6q0 0.3-0.2 0.5t-0.4 0.2h-1.4q-0.3 0-0.4-0.2t-0.2-0.5v-4.6h-2.8q-0.5 4.5-3.9 7.5t-7.9 3.1q-3.5 0-6.4-1.8t-4.4-4.9-1.1-6.6q0.3-2.8 1.8-5.1t3.9-3.8 5.2-1.7q3.2-0.2 6 1.1t4.7 3.9 2.1 5.6h2.8v-4.7q0-0.2 0.2-0.4t0.4-0.2h1.4q0.3 0 0.4 0.2t0.2 0.4v4.7h6.1l-3.8-3.8q-0.2-0.2-0.2-0.5t0.2-0.5l0.9-0.9q0.2-0.2 0.5-0.2t0.5 0.2z m-27.5 10.2q3.8 0 6.5-2.7t2.8-6.6-2.8-6.5-6.5-2.8-6.6 2.8-2.7 6.5 2.7 6.6 6.6 2.7z' })
                )
            );
        }
    }]);

    return FaMarsStrokeH;
}(React.Component);

exports.default = FaMarsStrokeH;
module.exports = exports['default'];