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

var MdAllInclusive = function (_React$Component) {
    _inherits(MdAllInclusive, _React$Component);

    function MdAllInclusive() {
        _classCallCheck(this, MdAllInclusive);

        return _possibleConstructorReturn(this, (MdAllInclusive.__proto__ || Object.getPrototypeOf(MdAllInclusive)).apply(this, arguments));
    }

    _createClass(MdAllInclusive, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31 11c5 0 9 4.1 9 9s-4 9-9 9c-2.4 0-4.7-1-6.4-2.7l-2.1-1.8 2.5-2.2 1.9 1.6c1.2 1.2 2.6 1.7 4.1 1.7 3.1 0 5.6-2.5 5.6-5.6s-2.5-5.6-5.6-5.6c-1.5 0-2.9 0.5-4 1.6-2.3 2.1-4.7 4.1-7 6.3l-4.7 4.1c-1.6 1.6-3.9 2.6-6.3 2.6-5 0-9-4.1-9-9s4-9 9-9c2.4 0 4.7 0.9 6.4 2.7l2.1 1.8-2.6 2.2-1.9-1.6c-1.1-1.2-2.5-1.7-4-1.7-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6c1.5 0 2.9-0.5 4-1.6 2.3-2.1 4.7-4.1 7-6.3l4.7-4.1c1.6-1.6 3.9-2.6 6.3-2.6z' })
                )
            );
        }
    }]);

    return MdAllInclusive;
}(React.Component);

exports.default = MdAllInclusive;
module.exports = exports['default'];