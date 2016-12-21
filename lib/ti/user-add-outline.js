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

var TiUserAddOutline = function (_React$Component) {
    _inherits(TiUserAddOutline, _React$Component);

    function TiUserAddOutline() {
        _classCallCheck(this, TiUserAddOutline);

        return _possibleConstructorReturn(this, (TiUserAddOutline.__proto__ || Object.getPrototypeOf(TiUserAddOutline)).apply(this, arguments));
    }

    _createClass(TiUserAddOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 23.3h-10c-0.9 0-1.7-0.7-1.7-1.6s0.8-1.7 1.7-1.7h10c0.9 0 1.7 0.7 1.7 1.7s-0.8 1.6-1.7 1.6z m-5 5c-0.9 0-1.7-0.7-1.7-1.6v-10c0-1 0.8-1.7 1.7-1.7s1.7 0.7 1.7 1.7v10c0 0.9-0.8 1.6-1.7 1.6z m-15-18.3c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z m0-3.3c-4.6 0-8.3 3.7-8.3 8.3s3.7 8.3 8.3 8.3 8.3-3.7 8.3-8.3-3.7-8.3-8.3-8.3z m0 21.6c3.4 0 5.5 1.3 6.3 2.4-1.1 0.5-3.3 1-6.3 1-3.3 0-5.3-0.5-6.4-0.9 0.8-1.2 3-2.5 6.4-2.5z m0-3.3c-6.2 0-10 3.3-10 6.7 0 1.6 3.8 3.3 10 3.3 5.9 0 10-1.7 10-3.3s-3.9-6.7-10-6.7z' })
                )
            );
        }
    }]);

    return TiUserAddOutline;
}(React.Component);

exports.default = TiUserAddOutline;
module.exports = exports['default'];