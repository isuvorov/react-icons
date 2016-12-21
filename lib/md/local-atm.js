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

var MdLocalAtm = function (_React$Component) {
    _inherits(MdLocalAtm, _React$Component);

    function MdLocalAtm() {
        _classCallCheck(this, MdLocalAtm);

        return _possibleConstructorReturn(this, (MdLocalAtm.__proto__ || Object.getPrototypeOf(MdLocalAtm)).apply(this, arguments));
    }

    _createClass(MdLocalAtm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 30v-20h-26.8v20h26.8z m0-23.4c1.8 0 3.2 1.5 3.2 3.4v20c0 1.9-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.5-3.2-3.4v-20c0-1.9 1.4-3.4 3.2-3.4h26.8z m-15 21.8v-1.8h-3.4v-3.2h6.6v-1.8h-5c-0.9 0-1.6-0.7-1.6-1.6v-5c0-0.9 0.7-1.6 1.6-1.6h1.8v-1.8h3.2v1.8h3.4v3.2h-6.6v1.8h5c0.9 0 1.6 0.7 1.6 1.6v5c0 0.9-0.7 1.6-1.6 1.6h-1.8v1.8h-3.2z' })
                )
            );
        }
    }]);

    return MdLocalAtm;
}(React.Component);

exports.default = MdLocalAtm;
module.exports = exports['default'];