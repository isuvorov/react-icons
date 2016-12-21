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

var GoLink = function (_React$Component) {
    _inherits(GoLink, _React$Component);

    function GoLink() {
        _classCallCheck(this, GoLink);

        return _possibleConstructorReturn(this, (GoLink.__proto__ || Object.getPrototypeOf(GoLink)).apply(this, arguments));
    }

    _createClass(GoLink, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 10h-5.4c1.9 1.3 3.6 3.5 4.2 5h1.2c2.5 0 5 2.5 5 5s-2.6 5-5 5h-7.5c-2.5 0-5-2.5-5-5 0-0.9 0.2-1.8 0.7-2.5h-5.4c-0.2 0.8-0.3 1.6-0.3 2.5 0 5 5 10 10 10h7.5s10-5 10-10-5-10-10-10z m-18.8 15h-1.2c-2.5 0-5-2.5-5-5s2.6-5 5-5h7.5c2.5 0 5 2.5 5 5 0 0.9-0.2 1.8-0.7 2.5h5.4c0.2-0.8 0.3-1.6 0.3-2.5 0-5-5-10-10-10h-7.5s-10 5-10 10 5 10 10 10h5.4c-1.9-1.2-3.6-3.5-4.2-5z' })
                )
            );
        }
    }]);

    return GoLink;
}(React.Component);

exports.default = GoLink;
module.exports = exports['default'];