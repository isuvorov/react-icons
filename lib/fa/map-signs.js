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

var FaMapSigns = function (_React$Component) {
    _inherits(FaMapSigns, _React$Component);

    function FaMapSigns() {
        _classCallCheck(this, FaMapSigns);

        return _possibleConstructorReturn(this, (FaMapSigns.__proto__ || Object.getPrototypeOf(FaMapSigns)).apply(this, arguments));
    }

    _createClass(FaMapSigns, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39 6.6q0.2 0.3 0.2 0.5t-0.2 0.6l-3.2 3.1q-0.6 0.6-1.5 0.6h-30q-0.6 0-1-0.4t-0.4-1v-5.7q0-0.6 0.4-1t1-0.4h12.8v-1.5q0-0.6 0.5-1t1-0.4h2.8q0.6 0 1 0.4t0.5 1v1.5h11.4q0.9 0 1.5 0.6z m-21.9 20.5h5.8v11.5q0 0.6-0.5 1t-1 0.4h-2.8q-0.6 0-1-0.4t-0.5-1v-11.5z m18.6-10q0.6 0 1 0.5t0.4 1v5.7q0 0.6-0.4 1t-1 0.4h-30q-0.9 0-1.5-0.6l-3.1-3.2q-0.3-0.2-0.3-0.5t0.2-0.5l3.2-3.1q0.6-0.7 1.5-0.7h11.4v-4.2h5.8v4.2h12.8z' })
                )
            );
        }
    }]);

    return FaMapSigns;
}(React.Component);

exports.default = FaMapSigns;
module.exports = exports['default'];