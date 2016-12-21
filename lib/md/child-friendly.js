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

var MdChildFriendly = function (_React$Component) {
    _inherits(MdChildFriendly, _React$Component);

    function MdChildFriendly() {
        _classCallCheck(this, MdChildFriendly);

        return _possibleConstructorReturn(this, (MdChildFriendly.__proto__ || Object.getPrototypeOf(MdChildFriendly)).apply(this, arguments));
    }

    _createClass(MdChildFriendly, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 33.4c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m-15 0c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m18.8-6.9c1.2 1.1 1.9 2.6 1.9 4.4 0 3.2-2.5 5.7-5.7 5.7-3 0-5.4-2.1-5.8-5h-3.5c-0.4 2.9-2.8 5-5.7 5-3.2 0-5.9-2.5-5.9-5.7 0-2.2 1.2-4.2 3-5.2-0.3-0.5-3.5-7.3-3.5-7.3h-3.6v-3.4h5.7l1.6 3.4h24.3c0 3-1.1 5.8-2.8 8.1z m-10.6-23.1c7.4 0 13.4 5.9 13.4 13.2h-13.4v-13.2z' })
                )
            );
        }
    }]);

    return MdChildFriendly;
}(React.Component);

exports.default = MdChildFriendly;
module.exports = exports['default'];