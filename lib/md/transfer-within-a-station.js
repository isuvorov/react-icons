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

var MdTransferWithinAStation = function (_React$Component) {
    _inherits(MdTransferWithinAStation, _React$Component);

    function MdTransferWithinAStation() {
        _classCallCheck(this, MdTransferWithinAStation);

        return _possibleConstructorReturn(this, (MdTransferWithinAStation.__proto__ || Object.getPrototypeOf(MdTransferWithinAStation)).apply(this, arguments));
    }

    _createClass(MdTransferWithinAStation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm9.6 14.8l-4.6 23.6h3.5l2.9-13.4 3.6 3.4v10h3.4v-12.6l-3.5-3.5 1-5c2.2 2.7 5.4 4.3 9.1 4.3v-3.2c-3.1 0-5.8-1.8-7.3-4.2l-1.5-2.6c-0.6-1.1-1.7-1.6-2.8-1.6-0.4 0-0.9 0.1-1.3 0.2l-8.7 3.6v7.8h3.2v-5.5l3-1.3z m6.3-5.7c-1.8 0-3.4-1.4-3.4-3.2s1.6-3.4 3.4-3.4 3.2 1.6 3.2 3.4-1.4 3.2-3.2 3.2z m16.6 23.8v-2.9l4.1 4.1-4.1 4.3v-3h-9.1v-2.5h9.1z m-5-7h9.1v2.5h-9.1v2.9l-4.1-4.2 4.1-4.2v3z' })
                )
            );
        }
    }]);

    return MdTransferWithinAStation;
}(React.Component);

exports.default = MdTransferWithinAStation;
module.exports = exports['default'];