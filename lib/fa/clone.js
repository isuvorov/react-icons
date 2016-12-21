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

var FaClone = function (_React$Component) {
    _inherits(FaClone, _React$Component);

    function FaClone() {
        _classCallCheck(this, FaClone);

        return _possibleConstructorReturn(this, (FaClone.__proto__ || Object.getPrototypeOf(FaClone)).apply(this, arguments));
    }

    _createClass(FaClone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.1 36.4v-24.3q0-0.2-0.2-0.5t-0.5-0.2h-24.3q-0.2 0-0.5 0.2t-0.2 0.5v24.3q0 0.3 0.2 0.5t0.5 0.2h24.3q0.3 0 0.5-0.2t0.2-0.5z m2.9-24.3v24.3q0 1.5-1 2.6t-2.6 1h-24.3q-1.4 0-2.5-1t-1-2.6v-24.3q0-1.4 1-2.5t2.5-1h24.3q1.5 0 2.6 1t1 2.5z m-8.6-8.5v3.5h-2.8v-3.5q0-0.3-0.2-0.5t-0.5-0.2h-24.3q-0.3 0-0.5 0.2t-0.2 0.5v24.3q0 0.2 0.2 0.5t0.5 0.2h3.5v2.8h-3.5q-1.5 0-2.6-1t-1-2.5v-24.3q0-1.5 1.1-2.5t2.5-1.1h24.3q1.4 0 2.5 1.1t1 2.5z' })
                )
            );
        }
    }]);

    return FaClone;
}(React.Component);

exports.default = FaClone;
module.exports = exports['default'];