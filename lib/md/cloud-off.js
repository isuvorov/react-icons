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

var MdCloudOff = function (_React$Component) {
    _inherits(MdCloudOff, _React$Component);

    function MdCloudOff() {
        _classCallCheck(this, MdCloudOff);

        return _possibleConstructorReturn(this, (MdCloudOff.__proto__ || Object.getPrototypeOf(MdCloudOff)).apply(this, arguments));
    }

    _createClass(MdCloudOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.9 16.6h-2.9c-3.7 0-6.6 3.1-6.6 6.8s2.9 6.6 6.6 6.6h16.3z m-7.9-7.8l2.1-2.2 27.9 27.9-2.1 2.1-3.4-3.2h-19.5c-5.5 0-10-4.5-10-10 0-5.4 4.3-9.8 9.6-10z m27.3 7.9c4.3 0.3 7.7 3.9 7.7 8.3 0 2.8-1.4 5.3-3.5 6.8l-2.4-2.4c1.5-0.9 2.5-2.5 2.5-4.4 0-2.7-2.2-5-5-5h-2.5v-0.9c0-5-4-9.1-9.1-9.1-1.6 0-3 0.3-4.2 1l-2.5-2.4c1.9-1.3 4.2-2 6.7-2 6.1 0 11.1 4.3 12.3 10.1z' })
                )
            );
        }
    }]);

    return MdCloudOff;
}(React.Component);

exports.default = MdCloudOff;
module.exports = exports['default'];