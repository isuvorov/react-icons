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

var MdFiberDvr = function (_React$Component) {
    _inherits(MdFiberDvr, _React$Component);

    function MdFiberDvr() {
        _classCallCheck(this, MdFiberDvr);

        return _possibleConstructorReturn(this, (MdFiberDvr.__proto__ || Object.getPrototypeOf(MdFiberDvr)).apply(this, arguments));
    }

    _createClass(MdFiberDvr, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 19.1v-1.6c0-1.4-1.1-2.5-2.5-2.5h-5.9v10h2.5v-3.4h2l1.4 3.4h2.5l-1.5-3.5c0.9-0.4 1.5-1.3 1.5-2.4z m-14 5.9l3-10h-2.5l-1.7 5.7-1.7-5.7h-2.5l2.9 10h2.5z m-7.6-2.5v-5c0-1.4-1.1-2.5-2.5-2.5h-5.9v10h5.9c1.4 0 2.5-1.1 2.5-2.5z m21.6-17.5c1.9 0 3.4 1.5 3.4 3.4v23.2c0 1.8-1.5 3.4-3.4 3.4h-30c-1.9 0-3.4-1.6-3.4-3.4v-23.2c0-1.9 1.5-3.4 3.4-3.4h30z m-27.5 12.5h3.4v5h-3.4v-5z m21.6 0h3.4v1.6h-3.4v-1.6z' })
                )
            );
        }
    }]);

    return MdFiberDvr;
}(React.Component);

exports.default = MdFiberDvr;
module.exports = exports['default'];