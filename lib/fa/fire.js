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

var FaFire = function (_React$Component) {
    _inherits(FaFire, _React$Component);

    function FaFire() {
        _classCallCheck(this, FaFire);

        return _possibleConstructorReturn(this, (FaFire.__proto__ || Object.getPrototypeOf(FaFire)).apply(this, arguments));
    }

    _createClass(FaFire, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.9 37.9v1.4q0 0.3-0.2 0.5t-0.5 0.2h-30q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.3h30q0.3 0 0.5 0.3t0.2 0.5z m-5.7-23.6q0 1.7-0.5 3.2t-1.5 2.5-1.9 2-2.2 1.7-1.9 1.6-1.4 1.8-0.6 2.2q0 2.1 1.5 5l-0.1 0 0 0q-2-0.9-3.5-1.9t-3.1-2.2-2.6-2.7-1.6-3.4-0.6-4.1q0-1.7 0.6-3.2t1.4-2.5 1.9-2 2.2-1.7 1.9-1.6 1.5-1.8 0.5-2.2q0-2.1-1.5-5l0.1 0 0 0q2 0.9 3.6 1.9t3 2.2 2.6 2.7 1.6 3.4 0.6 4.1z' })
                )
            );
        }
    }]);

    return FaFire;
}(React.Component);

exports.default = FaFire;
module.exports = exports['default'];